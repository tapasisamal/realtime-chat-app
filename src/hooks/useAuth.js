import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";

export const useAuth = () => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

     // Get current session on load
    useEffect(() => {
        const getUser = async() => {
            const {data, error} = await supabase.auth.getUser()

            if(data?.user) {
                setUser(data.user)
            } 
            setLoading(false)
        }
        getUser()

         // Listen for auth changes (login/logout)
        const {data: listener} = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUser(session?.user || null)
            }
        )
        return () => {
            listener?.subscription?.unsubscribe()
        }
    }, [])

    // Signup
    const signUp = async(email, password, name) => {
         console.log(" SIGNUP CALLED");
         console.log("EMAIL:", email);
         console.log("PASSWORD:", password);
         console.log("NAME:", name);

        const {data, error} = await supabase.auth.signUp({
            email: email.trim(),
            password,
            options: {
                data: {
                    name: name,
                },
            },
        })

        console.log("RESULT:", data, error);

        return {data, error}
    }

    // Login
    const signIn = async(email, password) => {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password
        })
        return {data, error}
    }

     // Logout
    const signOut = async() => {
        const {error} = await supabase.auth.signOut()
        return (error)
    }

    return { user, loading, signUp, signIn, signOut}
}

