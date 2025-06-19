// Let the client auto-detect the port
const hostName = window.location.hostname || "localhost";
const port = window.location.port || "3000";

// Build WebSocket URL
const socket = new WebSocket(`ws://${hostName}:${port}`);

// 1️⃣ Connection initiated
console.log("🔁 Client is making a connection request to the server...");
console.log("🛒 Customer walks toward the store...");

// 2️⃣ Connection opened
socket.onopen = () => {
    console.log("✅ Client connected to server (WebSocket open)");
    console.log("🚪 Customer enters the store!");

    // 3️⃣ Client sends a message
    socket.send("Hello from Client Side!");
    console.log("📤 Client sent a message to the server.");
    console.log("🙋‍♂️ Customer says: 'Hello! Do you have this item?'");
};

// 4️⃣ Message received from server
socket.onmessage = (event) => {
    console.log("📥 Client received message from the server.");
    console.log("😊 Customer hears the staff response:");
    console.log("💬 Server says:", event.data);
};

// 5️⃣ Handle error
socket.onerror = (err) => {
    console.error("❌ WebSocket error:", err);
};