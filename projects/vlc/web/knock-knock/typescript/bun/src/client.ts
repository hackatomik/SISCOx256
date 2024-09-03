// The client
const socket = await Bun.connect({
  hostname: "localhost",
  port: 3000,

  socket: {
    data(socket, data: Buffer) {
      console.log("Received data:", data.toString());
    },
    open(socket) {
      socket.write("Who's there?");
    },
    close(socket) {
      console.log("Connection closed");
    },
    drain(socket) {
      console.log("Drain event");
    },
    error(socket, error) {
      console.log("Error:", error);
    },

    // client-specific handlers
    connectError(socket, error) {
      console.log("Connection error:", error);
    }, // connection failed
    end(socket) {
      console.log("Connection ended");
    }, // connection closed by server
    timeout(socket) {
      console.log("Connection timed out");
    }, // connection timed out
  },
});
