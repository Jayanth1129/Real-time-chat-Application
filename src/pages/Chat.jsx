import { useState } from "react";
import ChatList from "../components/chat/ChatList";
import ChatWindow from "../components/chat/ChatWindow";

export default function Chat() {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="h-full flex">
      <ChatList onSelect={setActiveChat} />
      <ChatWindow chat={activeChat} />
    </div>
  );
}
