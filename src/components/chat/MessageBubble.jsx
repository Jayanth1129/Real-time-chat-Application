export default function MessageBubble({ message }) {
  const isMe = message.fromMe;

  let statusIcon = null;

  if (isMe) {
    switch (message.status) {
      case "pending":
        statusIcon = "⏳";
        break;
      case "failed":
        statusIcon = "😞";
        break;
      case "delivered":
        statusIcon = "😌";
        break;
      case "seen":
        statusIcon = "😃";
        break;
      default:
        statusIcon = null;
    }
  }

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
          isMe
            ? "bg-indigo-600 text-white"
            : "bg-white/10 text-white"
        }`}
      >
        {/* MESSAGE TEXT */}
        <div className="leading-relaxed">{message.text}</div>

        {/* TIME + STATUS */}
        {isMe && (
          <div className="flex items-center justify-end gap-2 mt-1">
            <span className="text-[11px] text-white/70">
              {message.time}
            </span>
            <span className="text-base">
              {statusIcon}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
