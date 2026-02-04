import { useState } from "react";
import { chats } from "../../data/mockChats";

export default function ChatList({ onSelect }) {
  const [query, setQuery] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <aside className="w-80 bg-[#0b0f1a] text-white border-r border-white/10 flex flex-col">
      {/* SEARCH */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search chats"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/10 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* CHAT LIST */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelect(chat)}
            className="flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-white/10 transition"
          >
            {/* PROFILE PIC */}
            <img
              src={chat.user.avatar}
              alt={chat.user.name}
              className="w-12 h-12 rounded-full object-cover border border-white/10"
            />

            {/* NAME + LAST MESSAGE */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <span className="font-medium truncate">
                  {chat.user.name}
                </span>
                {chat.unread > 0 && (
                  <span className="text-xs bg-indigo-600 px-2 py-0.5 rounded-full">
                    {chat.unread}
                  </span>
                )}
              </div>

              <div className="text-sm text-white/50 truncate">
                {chat.lastMessage}
              </div>
            </div>
          </div>
        ))}

        {filteredChats.length === 0 && (
          <div className="text-center text-white/40 text-sm mt-10">
            No chats found
          </div>
        )}
      </div>
    </aside>
  );
}
