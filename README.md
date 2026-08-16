# 🌍 Tour & Travel Booking System

A full-stack **Tour & Travel Booking System** built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

The application allows users to explore tour packages, discover destinations, view tour details, register/login, make bookings, and submit reviews.

---

## ✨ Features

- 🏝️ Browse and explore tour packages
- 🔎 Search and filter tours
- 📍 Explore destinations and tour details
- 👤 User registration and login
- 🔐 JWT-based authentication
- 📅 Tour booking functionality
- ⭐ User reviews and ratings
- 🖼️ Tour image gallery
- 📱 Responsive user interface
- 🧩 Reusable React components
- 🔄 REST API integration between frontend and backend

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router
- Reactstrap / Bootstrap
- Remix Icons
- Slick Carousel
- CSS

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose
- MongoDB Compass

### Authentication

- JSON Web Tokens (JWT)
- React Context API

### Development Tools

- VS Code
- Git & GitHub
- npm

---

## 📋 Prerequisites

Before running the project, make sure the following are installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [Git](https://git-scm.com/)

---

## ⚙️ Environment Variables

The backend requires environment variables for the server, MongoDB connection, and authentication.

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/travel
JWT_SECRET_KEY=your_jwt_secret_key