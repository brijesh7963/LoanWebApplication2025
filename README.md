📌 Loan Web App – MERN Stack

A complete Loan Management Web Application built using MongoDB, Express, React, Node.js (MERN).
This app includes user authentication, admin controls, loan applications, approvals, and status tracking.

🚀 Features

User Registration & Login (JWT Authentication)

Role-based Access (User/Admin)

Apply for Loan

Admin Approval / Reject System

Loan Status Tracking

MongoDB Database with Mongoose

REST API with validation

🛠️ Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/brijesh7963/loanwebapp.git

cd loanwebapp2025


🧩 Backend Setup (Node.js + Express)

Step 1: Install dependencies

cd backend

npm install

Step 2: Create .env file inside backend
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173

Step 3: Run the backend

npm run server


Backend runs at:

http://localhost:5000

🧩 Frontend Setup (React)

Step 1: Install dependencies

cd frontend

npm install



Step 2: Run the frontend

npm run dev


Frontend runs at:

http://localhost:5173


▶️ Run the Entire Project

Start Backend:

cd backend

npm run server

Start Frontend:

cd frontend

npm run dev


Both must be running for the app to work.

📦 Environment Variables Summary

Backend .env

PORT=5000

MONGO_URL=

JWT_SECRET=

CLIENT_URL=http://localhost:5173

Frontend .env

VITE_API_URL=http://localhost:5000
