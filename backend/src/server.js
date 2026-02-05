const http = require("http");
const app = require("./app");
const { initSocket } = require("./socket/socket");

const server = http.createServer(app);

initSocket(server);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
