import { useState, useRef, useEffect } from "react"
import type { Message } from "../types/message"
import MessageBubble from "./MessageBubble"
import TypingIndicator from "./TypingIndicator"
import ChatInput from "./ChatInput"

const Chatbot = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)

    const bottomRef = useRef<HTMLDivElement | null>(null)

    const getBotReply = (text: string) => {
        const lower = text.toLowerCase()
        if (lower.includes("salam")) return "Salam 👋 Mən UniBotam."
        if (lower.includes("adın")) return "Mən AI dərsi üçün hazırlanmış chatbotam."
        if (lower.includes("necesen")) return "Yaxşıyam 😊"
        return "Bağışla, bunu başa düşmədim."
    }

    const handleSend = () => {
        if (!input.trim()) return

        const userMessage: Message = {
            id: Date.now(),
            text: input,
            sender: "user",
        }

        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsTyping(true)

        setTimeout(() => {
            const botMessage: Message = {
                id: Date.now() + 1,
                text: getBotReply(userMessage.text),
                sender: "bot",
            }
            setMessages((prev) => [...prev, botMessage])
            setIsTyping(false)
        }, 1000)
    }

    const clearChat = () => setMessages([])

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, isTyping])

    return (
        <div className="min-h-screen bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] flex justify-center items-start p-10">
            <div className="w-full max-w-md h-[80vh] bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col border border-white/10 overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/20">
                    <div className="flex items-center gap-2 relative">
                        <div className="relative">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg">
                                🤖
                            </div>
                            {/* Online status */}
                            <span className="absolute w-3 h-3 bg-green-400 rounded-full bottom-0 right-0 border border-white" />
                        </div>
                        <h2 className="font-semibold text-white text-lg">FikoChatbot</h2>
                    </div>
                    <button
                        onClick={clearChat}
                        className="text-sm text-red-400 hover:text-red-600 cursor-pointer transition"
                    >
                        Təmizlə
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
                    {messages.map((msg) => (
                        <MessageBubble key={msg.id} message={msg} />
                    ))}

                    {isTyping && <TypingIndicator />}
                    <div ref={bottomRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-white/20">
                    <ChatInput input={input} setInput={setInput} onSend={handleSend} />
                </div>
            </div>
        </div>
    )
}

export default Chatbot