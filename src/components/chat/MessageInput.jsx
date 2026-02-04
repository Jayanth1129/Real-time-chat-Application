import { useState } from "react";
import {
  Paperclip,
  Smile,
  Mic,
  Send,
  Image,
  FileText,
  MapPin,
  BarChart2,
  Music,
  Sticker
} from "lucide-react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const sendMessage = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="relative px-4 py-3 border-t border-white/10 bg-[#0b0f1a]">
      {/* ATTACHMENT MENU */}
      {openMenu && (
        <div className="absolute bottom-16 left-4 bg-[#12172a] rounded-xl shadow-xl p-3 grid grid-cols-3 gap-4 z-50">
          <AttachItem icon={<Image />} label="Photo" />
          <AttachItem icon={<FileText />} label="Document" />
          <AttachItem icon={<Music />} label="Audio" />
          <AttachItem icon={<MapPin />} label="Location" />
          <AttachItem icon={<BarChart2 />} label="Poll" />
          <AttachItem icon={<Sticker />} label="GIF" />
        </div>
      )}

      {/* INPUT BAR */}
      <div className="flex items-center gap-3">
        {/* ATTACH */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="text-white/60 hover:text-white transition"
        >
          <Paperclip size={22} />
        </button>

        {/* EMOJI */}
        <button className="text-white/60 hover:text-white transition">
          <Smile size={22} />
        </button>

        {/* TEXT INPUT */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          rows={1}
          placeholder="Type a message"
          className="
            flex-1 resize-none
            bg-white/10 text-white
            rounded-xl px-4 py-2
            outline-none
            placeholder:text-white/40
            focus:ring-2 focus:ring-indigo-500
          "
        />

        {/* SEND / MIC */}
        {text.trim() ? (
          <button
            onClick={sendMessage}
            className="text-indigo-400 hover:text-indigo-300 transition"
          >
            <Send size={22} />
          </button>
        ) : (
          <button className="text-white/60 hover:text-white transition">
            <Mic size={22} />
          </button>
        )}
      </div>
    </div>
  );
}

function AttachItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1 text-white/70 hover:text-white cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs">{label}</span>
    </div>
  );
}
