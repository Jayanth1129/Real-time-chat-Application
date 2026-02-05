const { Server } = require("socket.io");

// userId -> socketId
const onlineUsers = new Map();

function initSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    // USER ONLINE
    socket.on("user-online", (userId) => {
      onlineUsers.set(userId, socket.id);
      io.emit("online-users", Array.from(onlineUsers.keys()));
    });

    // JOIN CHAT ROOM
    socket.on("join-chat", ({ chatId }) => {
      socket.join(chatId);
    });

    // SEND MESSAGE
    socket.on("send-message", ({ chatId, message }) => {
      // delivered to chat room
      io.to(chatId).emit("receive-message", {
        ...message,
        status: "delivered",
      });
    });

    // MESSAGE SEEN
    socket.on("message-seen", ({ chatId, messageId, seenBy }) => {
      io.to(chatId).emit("message-seen-update", {
        messageId,
        seenBy,
        status: "seen",
      });
    });

    // TYPING
    socket.on("typing", ({ chatId, userId }) => {
      socket.to(chatId).emit("typing", { userId });
    });

    socket.on("stop-typing", ({ chatId, userId }) => {
      socket.to(chatId).emit("stop-typing", { userId });
    });

    // DISCONNECT
    socket.on("disconnect", () => {
      for (let [userId, socketId] of onlineUsers.entries()) {
        if (socketId === socket.id) {
          onlineUsers.delete(userId);
          break;
        }
      }
      io.emit("online-users", Array.from(onlineUsers.keys()));
      console.log("Socket disconnected:", socket.id);
    });
  });
}

module.exports = { initSocket };
