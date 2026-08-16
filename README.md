# 🌍 Tour & Travel Booking Website (MERN Stack)

A full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) designed for booking tour packages, exploring destinations, reading user reviews, and managing travel itineraries.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router, Reactstrap / Bootstrap, Remix Icons, Slick Carousel
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Local MongoDB Server / MongoDB Compass)
- **Authentication:** JWT (JSON Web Tokens) & Context API

---

## 📋 Prerequisites

Before running the project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) & [MongoDB Compass](https://www.mongodb.com/products/compass)
- [Git](https://git-scm.com/)

---

## ⚙️ Environment Variables Setup

Create a `.env` file inside the `backend` folder and add the following configuration:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/travel
JWT_SECRET_KEY=your_jwt_secret_key
```

*(Adjust the `MONGO_URI` or `PORT` if your local MongoDB instance or port configuration differs).*

---

## 🚀 Step-by-Step Running Guide

This application requires running both the **Backend** and **Frontend** simultaneously in separate terminal windows.

### 1. Ensure Local MongoDB is Active
- Open **MongoDB Compass** and click **Connect** to `mongodb://localhost:27017` to ensure your database daemon is active.
- Alternatively, check Windows Services (`Win + R` -> `services.msc` -> ensure **MongoDB Server** status is **Running**).

---

### 2. Start the Backend Server (Terminal 1)

1. Open your terminal in the project root directory:
   ```bash
   cd backend
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Start the Express server:
   ```bash
   npm start
   ```
4. Confirm server readiness:
   ```text
   server listening on port 5000
   MongoDB connected
   ```
   *(Keep this terminal open and running)*

---

### 3. Start the Frontend Application (Terminal 2)

1. Open a **new terminal tab/window** in VS Code (click the `+` icon in the terminal panel).
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install frontend packages:
   ```bash
   npm install
   ```
4. Start the React development server:
   ```bash
   npm start
   ```
5. Wait for the compilation:
   ```text
   Starting the development server...
   Compiled successfully! (or Compiled with warnings.)
   ```
6. The app will automatically open in your default browser at:
   ```text
   http://localhost:3000
   ```

---

## 📂 Project Directory Structure

```text
Tour_Travel_Website_Main/
│
├── backend/
│   ├── Controllers/     # Controller functions & business logic
│   ├── models/          # Mongoose data models & schemas
│   ├── routes/          # API endpoint routes (tours, users, auth, bookings)
│   ├── utils/           # Utility functions & token verification
│   ├── .env             # Environment variables
│   ├── package.json     # Backend dependencies and scripts
│   └── index.js         # Backend server entry point
│
└── frontend/
    ├── public/          # Public HTML and favicon assets
    └── src/
        ├── assets/      # Static images, icons, and hero media
        ├── components/  # Reusable UI components (Header, Footer, TourCards, etc.)
        ├── context/     # Global state management (AuthContext)
        ├── hooks/       # Custom React hooks (useFetch, etc.)
        ├── pages/       # Application views (Home, Tours, TourDetails, Login, Register)
        ├── router/      # React Router route definitions
        ├── services/    # API calls and service integrations
        ├── styles/      # Custom CSS stylesheets
        ├── App.js       # Main React Component
        └── index.js     # React application DOM mount
```

---

## 🛑 Stopping the Application

To shut down the servers:
- Click into Terminal 1 (Backend) and press `Ctrl + C`.
- Click into Terminal 2 (Frontend) and press `Ctrl + C`.
