type Props = {
    input: string
    setInput: (value: string) => void
    onSend: () => void
}

const ChatInput = ({ input, setInput, onSend }: Props) => {
    return (
        <div className="flex gap-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onSend()}
                placeholder="Mesaj yaz..."
                className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                onClick={onSend}
                className="bg-blue-500 text-white px-4 rounded-xl cursor-pointer hover:bg-blue-600 transition"
            >
                Göndər
            </button>
        </div>
    )
}

export default ChatInput