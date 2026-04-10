import React, { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

const Auth = () => {
  const { signIn, signUp } = useAuth()

  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState("")  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (!email || !password || (!isLogin && !name)) {
      setError("Please fill all fields")
      return
    }

    let result

    if (isLogin) {
      result = await signIn(email, password)

      if (result.error) {
        setError(result.error.message)
      } else{
        navigate("/chat")
      }

    } else {
      
      result = await signUp(email, password, name)

      if (result.error) {
        setError(result.error.message)
      } else {
        setMessage("Account created successfully. Please login.")
        setIsLogin(true)

        setPassword("")
        setName("")
      }
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "300px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* SUCCESS MESSAGE */}
        {message && (
          <p style={{ color: "green", marginBottom: "10px" }}>
            {message}
          </p>
        )}

        {/* ERROR MESSAGE */}
        {error && (
          <p style={{ color: "red", marginBottom: "10px" }}>
            {error}
          </p>
        )}

        {/* NAME FIELD (only for signup) */}
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#4f46e5",
            color: "white",
            cursor: "pointer",
          }}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p
          onClick={() => {
            setIsLogin(!isLogin)
            setError("")
            setMessage("")
          }}
          style={{
            marginTop: "10px",
            textAlign: "center",
            cursor: "pointer",
            color: "#4f46e5",
          }}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </form>
    </div>
  )
}

export default Auth