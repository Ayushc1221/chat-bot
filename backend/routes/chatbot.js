const express = require("express");
const router = express.Router();
const db = require("../database");

// POST route to send user message and retrieve bot's response
router.post("/send-message", (req, res) => {
  const { message } = req.body;  // Get the user message from the request body

  // Hardcoded responses based on the user's message
  const responses = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing fine! How about you?",
    "bye": "Goodbye! Have a great day!",
  };

  // Default response if the message is not recognized
  const response = responses[message.toLowerCase()] || "Sorry, I didn't understand that.";

  // Save the user's message and bot's response to the database
  const query = "INSERT INTO messages (user_message, bot_response) VALUES (?, ?)";
  
  db.query(query, [message, response], (err) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).send("Internal Server Error");
    }
    
    // Send the bot's response back to the frontend
    res.json({ response });
  });
});

module.exports = router;
