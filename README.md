# Nexa Digital

Nexa Digital is a full-stack business website and contact management system developed as a personal portfolio and academic project.

The project demonstrates responsive frontend development, backend REST APIs, MySQL database integration, and administrator authentication.

## Features

- Responsive business website
- Modern landing page
- Services, About, and Projects sections
- Contact form with MySQL integration
- Admin login system
- Protected admin dashboard
- Admin logout
- REST API integration
- Password hashing with bcrypt

## Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Vite

### Backend

- Node.js
- Express.js
- REST API
- bcrypt
- CORS
- dotenv

### Database

- MySQL

### Development Tools

- Visual Studio Code
- Git
- GitHub
- MySQL Workbench

## Project Architecture

The application follows a simple full-stack architecture:

```text
User
  |
  v
React Frontend
  |
  | HTTP Requests
  v
Node.js + Express Backend
  |
  | SQL Queries
  v
MySQL Database 
```text


The frontend communicates with the backend through REST APIs, while the backend handles database operations and authentication.

Main Features
Business Website

A responsive business website with:

Hero section
Services section
About section
Projects section
Contact section
Responsive navigation
Contact Management System

Visitors can submit their name, email, and message through the contact form.

The information is sent to the backend and stored in the MySQL database.

Admin Authentication

The project includes an administrator login system.

The backend verifies administrator credentials and uses bcrypt to securely compare passwords.

Admin Dashboard

The admin dashboard displays contact messages stored in the database.

It includes:

Contact ID
Name
Email
Message
Submission date
Database Design

The project uses MySQL as its relational database.

Admins Table

Stores administrator account information.

admins
├── id
├── username
└── password
Contacts Table

Stores messages submitted through the website.

contacts
├── id
├── name
├── email
├── message
└── created_at
Project Structure
nexa-digital/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── BusinessDemo.jsx
│   │   └── BusinessWebsite.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
Environment Variables

Sensitive configuration is stored in the backend .env file.

Example:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=nexa_digital
JWT_SECRET=your_jwt_secret

The .env file is excluded from Git using .gitignore.

Do not commit real passwords or secret keys to GitHub.

Local Setup
1. Clone the Repository
git clone https://github.com/agupta41215-ctrl/nexa-digital.git
cd nexa-digital
2. Install Frontend Dependencies
npm install
3. Install Backend Dependencies
cd backend
npm install
4. Configure Environment Variables

Create a .env file inside the backend folder and add your local MySQL and application configuration.

5. Start the Backend

From the backend directory:

node server.js

Backend:

http://localhost:5000
6. Start the Frontend

Open another terminal in the project root:

npm run dev

Frontend:

http://localhost:5173
Application Routes
Frontend Routes
Route	Description
/	Main website
/business-website	Business website project page
/business-demo	Interactive business demo
/admin-login	Administrator login
/admin	Administrator dashboard
Backend API Routes
Method	Endpoint	Description
POST	/api/contact	Stores a contact message
GET	/api/contacts	Returns contact messages
POST	/api/admin-login	Authenticates the administrator
Project Purpose

Nexa Digital was created to demonstrate practical full-stack web development skills.

The project combines frontend development, backend APIs, MySQL database integration, authentication, and responsive web design.

It is intended for personal portfolio and academic use.

Future Improvements
Production deployment
Improved admin dashboard
Email notifications
Advanced contact management
Stronger production authentication
Automated testing
Performance optimization
Author

Aman Gupta

BTech Computer Science

Nexa Digital is an independently developed personal and academic project.