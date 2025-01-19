const mysql = require("mysql2");

// Create MySQL connection
const connection = mysql.createConnection({
  host: "localhost",    // Update this with your MySQL host
  user: "root",         // Your MySQL username
  password: "12345", // Your MySQL password
  database: "chatbot",  // Database name
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    return;
  }
  console.log("Connected to the MySQL database!");
});

module.exports = connection;
