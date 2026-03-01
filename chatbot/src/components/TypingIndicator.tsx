const TypingIndicator = () => {
    return (
        <div className="bg-white/30 text-white p-2 rounded-2xl w-16 flex gap-1 backdrop-blur-md">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-150">.</span>
            <span className="animate-bounce delay-300">.</span>
        </div>
    )
}

export default TypingIndicator