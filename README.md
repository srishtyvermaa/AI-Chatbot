# 🤖 AUTOCHAT – AI Chatbot using React and Node.js

A smart and friendly AI-powered chatbot built using **React** (frontend), **Node.js + Express** (backend), and **OpenRouter API** (powered by LLMs like Mistral).

⚡ Ask anything, and the assistant will reply in a conversational format. 

---

## ✨ Features 

🚀 Modern Fullstack Architecture
Built with a clean separation of concerns using React for dynamic UI and Node.js + Express for robust server-side logic.

🧠 AI-Powered Conversations
Leverages OpenRouter’s LLM API (e.g., Mistral 7B) to generate human-like responses, making interactions natural, smart, and context-aware.

🎨 Interactive & Responsive UI
Crafted with Tailwind CSS and Heroicons to provide a sleek, mobile-friendly chat experience with intuitive design elements and smooth transitions.

⚙️ Real-Time Request Handling
Implements async POST requests to handle user queries and fetch AI responses efficiently, with loading indicators and graceful error handling.

🔐 Secure API Key Management
Sensitive keys are handled using .env files and the dotenv package, ensuring credentials are never exposed in source control.

🌍 Cross-Origin Ready
Enabled CORS middleware to allow safe and flexible integration between frontend and backend during development and testing.

📦 Modular Codebase
Each component (like Chat and ChatMessage) is modular and reusable, adhering to clean coding practices and React hooks.

🧪 Extensible for Future Enhancements
Designed to easily support additional features like:

User authentication

Chat history storage

Multiple model integration

Voice input/output capabilities

---

## 🧩 Tech Stack

| Layer      | Technology        |
|------------|-------------------|
| Frontend   | React, Tailwind CSS, Heroicons |
| Backend    | Node.js, Express |
| AI Model   | OpenRouter API (Mistral) |
| Others     | dotenv, CORS      |

---

## 🏗️ Folder Structure

├── Chat.jsx # Main chat interface
├── ChatMessage.jsx # Individual message component
├── server.js # Express backend server
├── .env # API key (not committed)
├── package.json # Dependencies
├── .gitignore
└── README.md

yaml
Copy
Edit

---

## 🔧 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-chatbot.git
cd ai-chatbot
2. Install Dependencies
bash
Copy
Edit
npm install
3. Add .env File
Create a .env file in the root with:

ini
Copy
Edit
PORT=2000
OPENAI_API_KEY=your_openrouter_api_key
🚨 Don’t share your API key or commit the .env file to GitHub.

4. Start the Server
bash
Copy
Edit
npm run dev
Backend will run at http://localhost:2000.

5. Run the Frontend (if using separate React setup)
bash
Copy
Edit
cd client
npm install
npm start
