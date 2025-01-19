const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");
const chatbotRoutes = require("./routes/chatbot");

const app = express();

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:3000",  // Allow only frontend to access
  methods: "GET,POST",
  allowedHeaders: "Content-Type",
};

app.use(cors(corsOptions));  // Use CORS with options

// Middleware to parse incoming requests
app.use(bodyParser.json());  // To parse incoming JSON requests

// API Routes
app.use("/api", chatbotRoutes);  // Using the chatbot routes for API

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
