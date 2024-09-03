// The client
const socket = await Bun.connect({
  hostname: "localhost",
  port: 3000,

  socket: {
    data(socket, data: Buffer) {
      const message = data.toString().trim();
      console.log("Server:", message);
      if (message === "Bye.") {
        socket.end();
      } else {
        const userInput = prompt("Client: ");
        if (userInput != null) {
          socket.write(userInput + "\n");
        }
      }
    },
    open(socket) {
      console.log("Connected to server");
      const userInput = prompt("Client: ");
      if (userInput != null) {
        socket.write(userInput + "\n");
      }
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
