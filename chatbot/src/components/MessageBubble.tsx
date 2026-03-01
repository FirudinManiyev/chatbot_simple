import type { Message } from "../types/message"

type Props = { message: Message }

const MessageBubble = ({ message }: Props) => {
    const isUser = message.sender === "user"

    return (
        <div
            className={`flex items-end gap-2 ${isUser ? "justify-end" : "justify-start"
                }`}
        >
            {!isUser && (
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                    🤖
                </div>
            )}

            <div
                className={`p-3 rounded-2xl max-w-xs animate-fadeIn break-words ${isUser
                        ? "bg-blue-500/80 text-white"
                        : "bg-white/30 text-white backdrop-blur-md"
                    }`}
            >
                {message.text}
            </div>
        </div>
    )
}

export default MessageBubble