import express from "express";
import { WebSocketServer } from "ws";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3080;

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// 1️⃣ Server accepts new connection
wss.on("connection", (ws) => {
    console.log("✅ Server accepted client connection.");
    console.log("👀 Staff notices a new customer has entered.");

    // 2️⃣ Server receives message from client
    ws.on("message", (data) => {
        const msg = data.toString();
        console.log("📥 Server received message from client.");
        console.log("👂 Staff hears:", msg);

        // 3️⃣ Server sends reply
        ws.send("Hello from Server Side (index.js / VS Code / Express)!");
        console.log("📤 Server sent a reply to the client.");
        console.log("🧾 Staff replies: 'Yes, it’s in aisle 3!'");
    });
});

// Optional: error handling
wss.on("error", (err) => {
    console.error("WebSocket Server error:", err);
});

// Serve static files from client directory
app.use(express.static("../client"));

// Start the server
server.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});