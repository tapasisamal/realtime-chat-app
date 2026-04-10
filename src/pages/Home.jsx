import React from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9fafb",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "10px", color: "#111827" }}>
        💬 Realtime Chat App
      </h1>

      <p
        style={{
          fontSize: "15px",
          color: "#6b7280",
          maxWidth: "420px",
          lineHeight: "1.5",
        }}
      >
        A simple real-time chat application where users can sign up, log in,
        and chat instantly with live messaging.
      </p>

      <button
        onClick={() => navigate("/auth")}
        style={{
          marginTop: "25px",
          padding: "12px 22px",
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Get Started
      </button>

      <p style={{ marginTop: "35px", fontSize: "12px", color: "#9ca3af" }}>
        Built with React + Supabase
      </p>
    </div>
  )
}

export default Home