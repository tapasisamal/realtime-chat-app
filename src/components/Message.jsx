import React from "react"
import { FiX } from "react-icons/fi"

const Message = ({ message, currentUserId, deleteMessage }) => {
  const isOwnMessage = message.user_id === currentUserId

   // format time
  const time = new Date(message.created_at).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isOwnMessage ? "flex-end" : "flex-start",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          maxWidth: "60%",
          padding: "25px 14px 10px 14px",
          borderRadius: "12px",
          wordBreak: "break-word",
          backgroundColor: isOwnMessage ? "#4f46e5" : "#e5e7eb",
          color: isOwnMessage ? "white" : "black",
          position: "relative", 
        }}
      >
        {/* Name (only for others) */}
        {!isOwnMessage && (
          <div
            style={{
              fontSize: "12px",
              marginBottom: "4px",
              fontWeight: "500",
              opacity: 0.8,
            }}
          >
            {message.name || "Unknown User"}
          </div>
        )}
        
        {/* Delete button */}
        {isOwnMessage && (
          <button
          onClick={() => deleteMessage(message.id)}
          style={{
            position: "absolute",
            top: "6px",
            right: "6px",
            borderRadius: "50%",
            border: "none",
            background: "rgba(255,255,255,0.7)",
            cursor: "pointer",
          }}
          >
            <FiX size={14} color="#4f46e5" />
        </button>
      )}

        <p style={{ margin: 0 }}>{message.content}</p>

        {/* timestamp */}
        <div
          style={{
            fontSize: "10px",
            marginTop: "5px",
            opacity: 0.7,
            textAlign: "right",
          }}
        >
          {time}
        </div>
        
      </div>
    </div>
  )
}

export default Message