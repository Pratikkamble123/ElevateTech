# LeadFlow CRM – Full Stack Lead Management System

## Overview

**LeadFlow CRM** is a full-stack customer relationship management system designed to help businesses capture, manage, and track sales leads efficiently.

The platform provides a modern dashboard where users can store lead information, monitor lead progress, and manage client interactions through a clean and responsive interface.

This project demonstrates a **modern full-stack architecture** using React for the frontend, Express for the backend, and PostgreSQL for database management.

## Key Features

### Lead Management

* Create and store new leads
* Manage client contact details
* Track lead status and progress
* Organized lead database

### Authentication System

* Secure login system
* Protected API routes
* Session-based authentication

### Modern Dashboard

* Interactive React interface
* Responsive layout for desktop and mobile
* Fast client-side routing

### Backend API

* RESTful API built with Express
* Database communication using Drizzle ORM
* Structured API endpoints for lead management

### Database Integration

* PostgreSQL database
* Serverless database hosted on Neon
* Scalable data management



## Tech Stack

### Frontend

* React
* Vite
* TailwindCSS
* React Query

### Backend

* Node.js
* Express.js
* Drizzle ORM

### Database

* PostgreSQL

### Deployment

* Backend Hosting: Railway
* Database Hosting: Neon



## Project Architecture

```
Lead-Flow-CRM
│
├── client/            # React frontend
├── server/            # Express backend
├── drizzle/           # Database schema
├── dist/              # Production build
├── package.json
└── README.md
```

---

## Installation & Setup

### Clone the repository

```
git clone https://github.com/Pratikkamble123/Lead-Flow-CRM.git
```

### Navigate to the project

```
cd Lead-Flow-CRM
```

### Install dependencies

```
npm install
```

### Run development server

```
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory and add:

```
DATABASE_URL=your_postgresql_connection_string
PORT=5000
```

The database can be hosted using Neon.

---

## Deployment

This project can be deployed using:

Backend:

* Railway

Database:

* Neon PostgreSQL

After deployment, the backend server runs using:

```
npm run build
npm start
```



## Future Improvements

Possible enhancements include:

* Role-based authentication
* Lead analytics dashboard
* Email notifications for new leads
* CRM reporting system
* Client portal for interaction



## Author

Pratik Kamble
Computer Science & Design Student – YCCE
Web Developer

Passionate about building scalable web applications and modern digital experiences.



## License

This project is created for learning, portfolio development, and demonstration purposes.
