# 🤖 AUTOCHAT – AI Chatbot using React and Node.js

This is a full-stack AI chatbot project developed as a part of our college coursework. It uses **React** for the frontend, **Node.js + Express** for the backend, and **OpenRouter API** to generate intelligent responses powered by large language models like **Mistral 7B**.

---

## ✨ Project Overview

**AUTOCHAT** is a smart virtual assistant that:
- Accepts user messages through a chat interface
- Sends them to the backend server
- Uses an AI model to generate a relevant response
- Displays the AI response in a conversational format

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
