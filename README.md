# CRUD API - Node.js & Express

A RESTful API built with Node.js and Express for managing users with full CRUD operations.

## 🚀 Features

- **Create** - Add new users
- **Read** - Get all users or a specific user by ID
- **Update** - (Ready for implementation)
- **Delete** - Remove users by ID

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/) (v8.0 or higher)
- npm (comes with Node.js)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CRUD-NODEJS
```

2. Navigate to the backend directory:
```bash
cd backend
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the `backend` directory:
```env
PORT=5000
HOST_DB=localhost
```

5. Set up your MySQL database:
   - Create a database named `users`
   - Create a table `usuarios` with the following structure:
   ```sql
   CREATE TABLE usuarios (
     id INT AUTO_INCREMENT PRIMARY KEY,
     nombre VARCHAR(255) NOT NULL,
     correo VARCHAR(255) NOT NULL
   );
   ```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## 📡 API Endpoints

### Base URL
```
http://localhost:5000/usuarios
```

### Endpoints

#### Get All Users
```http
GET /usuarios
```

**Response:**
```json
{
  "message": "Todos los usuarios se han obtenido con exito",
  "res": [
    {
      "id": 1,
      "nombre": "John Doe",
      "correo": "john@example.com"
    }
  ]
}
```

#### Get User by ID
```http
GET /usuarios/:id
```

**Response:**
```json
{
  "message": "Usuario encontrado con exito",
  "data": {
    "id": 1,
    "nombre": "John Doe",
    "correo": "john@example.com"
  }
}
```

#### Create User
```http
POST /usuarios
Content-Type: application/json
```

**Body:**
```json
{
  "nombre": "John Doe",
  "correo": "john@example.com"
}
```

**Response:**
```json
{
  "message": "Usuario creado correctamente",
  "data": {
    "insertId": 1
  }
}
```

#### Delete User
```http
DELETE /usuarios/:id
```

**Response:**
```json
{
  "message": "Usuario eliminado con exito"
}
```

## 📁 Project Structure

```
backend/
├── controllers/
│   └── user.controller.js    # User controllers
├── database/
│   └── config.db.js          # Database configuration
├── models/
│   └── user.models.js        # User data models
├── routes/
│   └── user.routes.js        # User routes
├── index.js                   # Application entry point
├── server.js                  # Express server setup
└── package.json               # Dependencies
```

## 🛠️ Technologies Used

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MySQL2** - MySQL database driver
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables
- **Nodemon** - Development server auto-reload

## 📝 Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
HOST_DB=localhost
```

## 👤 Author

**Samuel Sarmiento**

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you have any questions or need help, please open an issue in the repository.
