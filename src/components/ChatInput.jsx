import React, { useState } from "react"
import { IoSend } from "react-icons/io5"

const ChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("")

  const handleSend = async () => {
    if (!message.trim()) return

    await sendMessage(message)
    setMessage("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        borderTop: "1px solid #ddd",
      }}
    >
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />

      <button
        onClick={handleSend}
        style={{
          marginLeft: "10px",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#4f46e5",
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IoSend size={20} />
      </button>
    </div>
  )
}

export default ChatInput