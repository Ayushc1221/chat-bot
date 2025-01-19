# Chatbot Application

This is a simple chatbot application built using React for the frontend and MySQL for the backend database. The project demonstrates basic chatbot functionality, including storing user-bot interactions in a database and rendering a responsive user interface for chat.

---

## Features

- **Interactive Chat Interface**: Allows users to interact with the chatbot.
- **Dynamic Responses**: Provides predefined responses based on user input.
- **Message Storage**: Logs user messages and bot responses in a MySQL database.
- **Responsive Design**: A user-friendly interface styled with CSS.

---

## Technologies Used

### Frontend

- **React**: For building the user interface.
- **CSS**: For styling the chat interface.
- **Axios**: For making HTTP requests to the backend API.

### Backend

- **Node.js**: For building the server-side application.
- **Express.js**: For handling routes and middleware.
- **MySQL**: As the database for storing chat messages.
- **MySQL2**: For connecting and querying the MySQL database.

### Development Tools

- **Yarn**: As the package manager.
- **Web Vitals**: For measuring performance metrics.
- **Jest DOM**: For DOM-related testing utilities.

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- Yarn
- MySQL

### Backend Setup

1. Navigate to the backend folder.
2. Install dependencies using Yarn:
   ```bash
   yarn install
   ```
3. Configure the MySQL database in `database.js`:
   - Update the `host`, `user`, `password`, and `database` fields with your MySQL credentials.
4. Start the backend server:
   ```bash
   yarn start
   ```
   The server will run on `http://localhost:5000` by default.

### Frontend Setup

1. Navigate to the frontend folder.
2. Install dependencies using Yarn:
   ```bash
   yarn install
   ```
3. Start the frontend development server:
   ```bash
   yarn start
   ```
   The frontend will run on `http://localhost:3000` by default.

---

## Project Structure

### Backend

- **`routes/chatbot.js`**: Contains the API endpoint for handling user messages and providing bot responses.
- **`database.js`**: Handles the connection to the MySQL database.

### Frontend

- **`src/Chat.js`**: Implements the chat interface and logic for communicating with the backend.
- **`src/Chat.css`**: Provides styling for the chat interface.
- **`src/reportWebVitals.js`**: Measures performance metrics for the application.
- **`src/setupTests.js`**: Sets up the testing environment.

---

## Usage

1. Open the frontend application in your browser.
2. Type a message in the input field and press the "Send" button.
3. The bot will respond with a predefined message based on your input.
4. All messages and responses are stored in the MySQL database.

---

## Example Queries

- **User**: hello
  **Bot**: Hi there! How can I help you?

- **User**: how are you
  **Bot**: I'm just a bot, but I'm doing fine! How about you?

- **User**: bye
  **Bot**: Goodbye! Have a great day!

---

## Troubleshooting

- **Database Connection Errors**:
  Ensure the database credentials in `database.js` are correct and the MySQL server is running.

- **Frontend-Backend Connection Issues**:
  Verify that the backend server is running on `http://localhost:5000` and update the API URL in `Chat.js` if necessary.

---

## Future Improvements

- Add natural language processing for more dynamic responses.
- Implement user authentication and personalized chat sessions.
- Enhance the UI with animations and additional styling.

---

## Acknowledgements

- [React](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)

