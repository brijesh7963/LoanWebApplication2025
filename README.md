📌 Loan Web App – MERN Stack

A complete Loan Management Web Application built using MongoDB, Express, React, Node.js (MERN).
This app includes user authentication, admin controls, loan application flow, loan approval/rejection, and customer management.

🚀 Features

User Registration & Login (JWT-based authentication)

Role-based access (User/Admin)

Loan Application Submission

Admin Dashboard for Approvals

Loan Status Tracking

MongoDB Database with Mongoose

REST APIs with proper validation

📁 Project Structure
loanwebapp/
 ├── backend/   → Node.js + Express + MongoDB
 └── frontend/  → React + Vite (or CRA)

🛠️ Setup Instructions
1. Clone the Repository
git clone https://github.com/brijesh7963/loanwebapp.git
cd loanwebapp

🧩 Backend Setup (Node.js + Express)
Step 1: Install dependencies
 cd backend
 npm install
 
Step 2: Create .env file
Make a file in /backend:
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173

Step 3: Run Backend
npm run server

🧩 Frontend Setup (React)
Step 1: Install dependencies
cd frontend
npm install

Step 2: Run Frontend
npm run dev

📦 Environment Variables Summary
Backend .env
PORT=5000
MONGO_URL=
JWT_SECRET=
CLIENT_URL=


