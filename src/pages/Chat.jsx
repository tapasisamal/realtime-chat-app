import React from "react"
import { useAuth } from "../hooks/useAuth"
import { useChat } from "../hooks/useChat"
import MessageList from "../components/MessageList"
import ChatInput from "../components/ChatInput"
import { FiLogOut } from "react-icons/fi"

const Chat = () => {
  const { user, signOut } = useAuth()
  const { messages, sendMessage } = useChat(user)

  if (!user) {
    return <p>Loading...</p>
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h3>Chat App</h3>

        <button
          onClick={signOut}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <FiLogOut size={20} />
        </button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <MessageList
          messages={messages}
          currentUserId={user.id}
        />
      </div>

      {/* Input */}
      <ChatInput sendMessage={sendMessage} />
    </div>
  )
}

export default Chat