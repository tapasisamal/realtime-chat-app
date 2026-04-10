import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";

export const useChat = (user) => {

    const [messages, setMessages] = useState([])

    // Fetch existing messages
    const fetchMessages = async() => {
        const {data, error} = await supabase
           .from("messages")
           .select("*")
           .order("created_at", {ascending: true})
        
        if(!error) {
            setMessages(data)
        }
    }

    // Send message
    const sendMessage = async(content) => {
        if(!user) return

        await supabase.from("messages").insert([
            {
                content,
                user_id: user.id,
                name: user.user_metadata?.name || null, 
            }
        ])
    }

     // Realtime subscription
    useEffect(() => {
        if (!user) return;

        fetchMessages()

        const channel = supabase
           .channel("messages")
           .on(
            "postgres_changes",
            {
                event: "INSERT",
                schema: "public",
                table: "messages",
            },
            (payload) => {
                console.log(" REALTIME EVENT:", payload);
                setMessages((prev => [...prev, payload.new]))
            }
           )
           .subscribe((status) => {
              console.log(" Status:", status);
            });

        return() => {
            supabase.removeChannel(channel)
        }
    }, [user])

    return {messages, sendMessage}
}