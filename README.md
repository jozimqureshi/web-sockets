# 🧠 WebSocket Lifecycle Demo — Mall Analogy 🏪

This project is a **visual and functional demo** of the WebSocket communication cycle between a client and server, explained through a **shopping mall analogy**. It's designed for easy understanding of WebSocket fundamentals using Express (Node.js) on the backend and plain JavaScript with Bootstrap on the frontend.

This is also to practise Git and GitHub.

---

## 🚀 Features

- WebSocket client-server communication with message exchange
- Clear technical + real-life analogy (customer/store staff)
- Simple UI with Bootstrap layout
- Auto-detects server host and port from browser
- Real-time logs in browser and VS Code/Terminal

---

## 🛠️ Technologies

- **Backend:** Node.js, Express, ws (WebSocket)
- **Frontend:** HTML, JavaScript, Bootstrap 5
- **Environment Config:** dotenv

---

## 📁 Project Structure

```
/project-root
│
├── server/
│   ├── index.js         # Express + WebSocket server
│   └── .env             # Port configuration (PORT=8080)
│
├── client/
│   ├── index.html       # Frontend UI with Bootstrap
│   └── js/
│       └── app.js       # WebSocket client logic
│
└── README.md            # This file
```


## 📦 Installation

# Clone the repo
git clone https://github.com/jozimqureshi/web-sockets.git
cd websocket-mall-analogy

# Install server dependencies
cd server
npm install

## Configuration

Create a .env file inside the server/ directory:

PORT=8080

## Usage

# Run the WebSocket + Express server
node index.js

Then open your browser and go to:

http://localhost:8080

You’ll see:

    UI: “Heading” + “Content”

    Console logs showing WebSocket events:

        Client sends → Server receives

        Server replies → Client logs response

## Analogy Table

The demo includes a Bootstrap grid layout explaining each WebSocket step like:

| Step | Code                   | Tech Description            | Mall Analogy               |
| ---- | ---------------------- | --------------------------- | -------------------------- |
| 1️⃣  | `new WebSocket(...)`   | Client initiates connection | 🛒 Customer walks to store |
| 2️⃣  | `socket.onopen`        | Client confirms connection  | 🚪 Customer enters         |
| 3️⃣  | `wss.on("connection")` | Server accepts client       | 👀 Staff sees them         |
| 4️⃣  | `socket.send(...)`     | Client sends message        | 🙋‍♂️ Customer asks        |
| 5️⃣  | `ws.on("message")`     | Server receives message     | 👂 Staff hears it          |
| 6️⃣  | `ws.send(...)`         | Server replies              | 🧾 Staff answers           |
| 7️⃣  | `socket.onmessage`     | Client receives response    | 😊 Customer reacts         |

## Test

Check both:

    Terminal Logs (VS Code) → Server logs

    Browser Console (DevTools) → Client logs

## Credits

Created by Mr Jozi Mehmood — WebSocket demo with ❤️ and analogies.
