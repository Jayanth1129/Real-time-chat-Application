import { useState } from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import { messages as initialMessages } from "../../data/mockMessages";

export default function ChatWindow({ chat }) {
  const [messages, setMessages] = useState(initialMessages);

  if (!chat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-5 bg-[#0e1424]">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 flex items-center justify-center">
          <img src="/logo.png" className="w-14 h-14" />
        </div>

        <div className="text-white text-lg font-medium">
          Welcome to ChatX
        </div>

        <div className="text-white/50 text-sm">
          Select a chat to start messaging
        </div>
      </div>
    );
  }

  const handleSend = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        fromMe: true,
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "pending", // ⏳ waiting for network
      },
    ]);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0e1424]">
      {/* HEADER */}
      <div className="h-16 px-4 flex items-center gap-3 border-b border-white/10 text-white">
        <img
          src={chat.user.avatar}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-medium">{chat.user.name}</div>
          <div className="text-xs text-green-400">
            {chat.user.online ? "Online" : "Offline"}
          </div>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>

      {/* INPUT */}
      <MessageInput onSend={handleSend} />
    </div>
  );
}
