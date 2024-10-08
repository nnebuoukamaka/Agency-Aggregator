# Agency_Aggregator

The **Agency Aggregator** is a web-based platform that allows agencies to register, manage their profiles, and connect with potential clients or administrators. The project uses the MERN stack (MongoDB, Express, React, Node.js) and features a role-based access system for both agencies and admins.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contact](#contact)

---

## Features

- Role-based user authentication (Agency and Admin)
- JWT-based user authentication
- Agency registration and profile management
- Admin dashboard for managing agencies
- Protected routes for different user roles
- Fully responsive and clean UI

---

## Tech Stack

- **Frontend**: React, React Router, Context API, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Styling**: CSS
- **Other Tools**: Mongoose, bcrypt.js, dotenv, cors

---

## Project Structure

```
├── client
│   ├── public
│   └── src
│       ├── api
│       ├── components
│       ├── context
│       ├── styles
│       └── App.js
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
├── README.md
├── .env
└── package.json
```

---

## Installation

Follow the steps below to set up the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your local machine.
- [MongoDB](https://www.mongodb.com/) installed or an active MongoDB Atlas connection.
- A code editor like [VSCode](https://code.visualstudio.com/).

### Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/nnebuoukamaka/Agency_Aggregator.git
```

### Set Up Backend

1. **Navigate to the server directory**:

    ```bash
    cd agency-aggregator-dashboard/server
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**: 

    Create a `.env` file in the `server` directory with the following values (replace placeholders with your own values):

    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/agencyAggregator
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the backend**:

    ```bash
    npm start
    ```

   Your backend should be running on `http://localhost:5000`.

### Set Up Frontend

1. **Navigate to the client directory**:

    ```bash
    cd ../client
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the frontend**:

    ```bash
    npm start
    ```

   Your frontend should be running on `http://localhost:3000`.

---

## Environment Variables

Here’s a list of environment variables you need to define in the `.env` file for your backend:

- `PORT`: The port your backend server will run on (default: 5000).
- `MONGO_URI`: MongoDB connection string (local or MongoDB Atlas).
- `JWT_SECRET`: A secret key used for signing JWT tokens.

---

## Running the Application

### Backend

To run the backend server, execute the following commands:

```bash
cd server
npm install
npm start
```

The server should run on `http://localhost:5000`.

### Frontend

To run the frontend React app, execute the following commands:

```bash
cd client
npm install
npm start
```

The frontend should run on `http://localhost:3000`.

---

## API Endpoints

### Authentication (Auth Routes)

- **POST** `/api/auth/register`: Register a new user (agency or admin).
- **POST** `/api/auth/login`: Login user and return JWT token.

### Agency Routes

- **POST** `/api/agencies/register`: Register a new agency.
- **GET** `/api/agencies`: Retrieve all agencies (admin access required).

### Admin Routes

- **GET** `/api/admin/dashboard`: Retrieve admin dashboard data (admin access required).

---

## Possible Errors

If you encounter a **500 (Internal Server Error)**, ensure that:
- The MongoDB server is running and you are connected correctly.
- The JWT secret is correctly set in the `.env` file.
- Ensure CORS is correctly configured for frontend and backend to communicate.

---

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: ukysmart96@gmail.com
- **GitHub**: https://github.com/nnebuoukamaka

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Explanation:

- **Project Setup**: Instructions for both the backend (Express.js) and frontend (React) with commands for running them locally.
- **Environment Variables**: Explanation of the required `.env` file for backend configuration.
- **API Endpoints**: A summary of the key API routes for authentication and agency management.
- **Contact**: Placeholder for your contact info (email and GitHub).
