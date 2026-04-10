import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Chat from "./pages/Chat"
import { useAuth } from "./hooks/useAuth"

const App = () => {
  const { user } = useAuth()

  return (
    <BrowserRouter>
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Auth page */}
        <Route path="/auth" element={<Auth />} />

        {/* Chat page (protected route) */}
        <Route
          path="/chat"
          element={
            user ? <Chat /> : <Navigate to="/auth" />
          }
        />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App