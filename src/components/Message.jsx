import React from "react"

const Message = ({ message, currentUserId }) => {
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
          padding: "10px 14px",
          borderRadius: "12px",
          wordBreak: "break-word",
          backgroundColor: isOwnMessage ? "#4f46e5" : "#e5e7eb",
          color: isOwnMessage ? "white" : "black",
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