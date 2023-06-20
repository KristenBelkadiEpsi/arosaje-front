const socketioClient = require("socket.io-client");
export const socket = socketioClient.io("ws://localhost:4000");