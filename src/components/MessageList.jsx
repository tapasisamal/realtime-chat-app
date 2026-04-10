import React, { useEffect, useRef } from "react"
import Message from "./Message"

const MessageList = ({ messages, currentUserId, deleteMessage }) => {

  const bottomRef = useRef(null)

  // Auto scroll whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {messages.map((msg) => (
        <Message
          key={msg.id}
          message={msg}
          currentUserId={currentUserId}
          deleteMessage={deleteMessage}
        />
      ))}

      <div ref={bottomRef} />
      
    </div>
  )
}

export default MessageList