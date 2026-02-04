export const messages = [
  {
    id: 1,
    fromMe: true,
    text: "Hey",
    time: "10:30",
    status: "pending", // waiting for network
  },
  {
    id: 2,
    fromMe: true,
    text: "Are you there?",
    time: "10:31",
    status: "failed", // no internet on receiver
  },
  {
    id: 3,
    fromMe: true,
    text: "Ping me later",
    time: "10:32",
    status: "delivered", // not seen
  },
  {
    id: 4,
    fromMe: true,
    text: "Okay 👍",
    time: "10:33",
    status: "seen",
  },
  {
    id: 5,
    fromMe: false,
    text: "Yes, sorry!",
    time: "10:34",
  },
];
