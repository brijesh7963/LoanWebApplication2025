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
git clone https://github.com/yourusername/loanwebapp.git
cd loanwebapp

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
npm run dev


Backend runs at:

http://localhost:5000

🧩 Frontend Setup (React)
Step 1: Install dependencies
cd frontend
npm install

Step 2: Create .env file inside frontend
VITE_API_URL=http://localhost:5000

Step 3: Run the frontend
npm run dev


Frontend runs at:

http://localhost:5173

🍃 MongoDB Connection

Backend connects to MongoDB using Mongoose:

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


Ensure your .env contains a valid MongoDB URL:

MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/loanapp

🌱 Seed Data (Optional)

To create a default admin user, create a file named seed.js:

import User from "./models/userModel.js";
import bcrypt from "bcryptjs";
import connectDB from "./config/db.js";

await connectDB();

await User.create({
  name: "Admin",
  email: "admin@example.com",
  password: bcrypt.hashSync("123456", 10),
  role: 1
});

console.log("Admin Seed Created");
process.exit();


Run the script:

node seed.js

📘 API Documentation
🔐 Auth Routes
Register User

POST /api/auth/register

Body:

{
  "name": "Viki",
  "email": "viki@gmail.com",
  "password": "123456"
}

Login User

POST /api/auth/login

Response:

{
  "success": true,
  "token": "jwt_token",
  "user": {
    "name": "Viki",
    "role": 0
  }
}

📝 Loan Routes
Apply for Loan

POST /api/loan/apply

Body:

{
  "amount": 50000,
  "income": 20000,
  "creditScore": 750
}

Get Loan Status

GET /api/loan/status

🛠️ Admin Routes
Get All Loan Requests

GET /api/admin/loans

Approve/Reject Loan

PUT /api/admin/update/:id

Body:

{
  "status": "approved"
}

▶️ Run the Entire Project
Start Backend:
cd backend
npm run dev

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
