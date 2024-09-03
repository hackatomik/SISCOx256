import { listen } from "bun";
import { processInput } from "./protocol.ts";
import type { Socket } from "bun";

const server = listen({
  port: 3000,
  hostname: "localhost",
  socket: {
    data(socket: Socket, data: Uint8Array) {
      const input = data.toString().trim();
      const response = processInput(input);
      socket.write(response + "\n");
      if (response === "Bye.") {
        socket.end();
      }
    },
    open(socket: Socket) {
      console.log("Client connected");
    },
    close(socket: Socket) {
      console.log("Client disconnected");
    },
    error(socket: Socket, error: Error) {
      console.error("Error:", error);
    },
  },
});

console.log(`TCP server is running on port ${server.hostname}:${server.port}`);
