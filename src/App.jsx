import React from "react"
import { useAuth } from "./hooks/useAuth"
import Auth from "./pages/Auth"
import Chat from "./pages/Chat"

const App = () => {
  const { user, loading } = useAuth()

  // While checking session
  if (loading) {
    return <p>Loading...</p>
  }

  // If not logged in → Auth page
  if (!user) {
    return <Auth />
  }

  // If logged in → Chat page
  return <Chat />
}

export default App