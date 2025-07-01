const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful and friendly AI assistant. Provide clear, concise, and accurate responses.",
            },
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ OpenRouter API error:", data);
      return res
        .status(500)
        .json({ error: "Error from OpenRouter", details: data });
    }

    const aiResponse = data.choices[0].message.content;
    res.json({ message: aiResponse });
  } catch (error) {
    console.error("🔥 Internal Server Error:", error);
    res
      .status(500)
      .json({ error: "Something went wrong", details: error.message });
  }
});

// Optional fallback error handler
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.stack);
  res.status(500).send("Something Broke!");
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
