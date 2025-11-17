# Portfolio Backend Server

A complete Express.js backend server with MySQL database integration for the portfolio application.

## Features

- ✅ Express.js RESTful API
- ✅ MySQL database integration with connection pooling
- ✅ Contact form endpoints
- ✅ Project management endpoints
- ✅ CORS enabled
- ✅ Error handling middleware
- ✅ Request logging with Morgan
- ✅ Environment variable configuration
- ✅ Health check endpoint

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` file with your database credentials:
```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=portfolio_db
```

5. Create the database and tables:
   - Open MySQL command line or MySQL Workbench
   - Run the SQL script: `database/schema.sql`
   - Or manually create the database and run the SQL commands

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the PORT specified in .env)

## API Endpoints

### Health Check
- `GET /health` - Check server status

### Contact Endpoints
- `POST /api/contact` - Create a new contact message
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Hello",
    "message": "This is a test message"
  }
  ```
- `GET /api/contact` - Get all contact messages (with pagination)
  - Query params: `?page=1&limit=10`
- `GET /api/contact/:id` - Get a specific contact message
- `DELETE /api/contact/:id` - Delete a contact message

### Project Endpoints
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a specific project
- `POST /api/projects` - Create a new project
  ```json
  {
    "title": "Project Title",
    "description": "Project description",
    "image_url": "https://example.com/image.jpg",
    "project_url": "https://example.com/project",
    "github_url": "https://github.com/user/project",
    "technologies": "React, Node.js",
    "category": "Web Development"
  }
  ```
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

## Project Structure

```
server/
├── config/
│   └── db.js              # Database configuration
├── controllers/
│   ├── contact.controller.js
│   └── project.controller.js
├── routes/
│   ├── index.js
│   ├── contact.routes.js
│   └── project.routes.js
├── database/
│   └── schema.sql         # Database schema
├── .env.example           # Environment variables template
├── .gitignore
├── package.json
├── server.js              # Main server file
└── README.md
```

## Database Schema

### Contacts Table
- `id` (INT, Primary Key, Auto Increment)
- `name` (VARCHAR(255))
- `email` (VARCHAR(255))
- `subject` (VARCHAR(255), nullable)
- `message` (TEXT)
- `created_at` (TIMESTAMP)

### Projects Table
- `id` (INT, Primary Key, Auto Increment)
- `title` (VARCHAR(255))
- `description` (TEXT)
- `image_url` (VARCHAR(500), nullable)
- `project_url` (VARCHAR(500), nullable)
- `github_url` (VARCHAR(500), nullable)
- `technologies` (VARCHAR(500), nullable)
- `category` (VARCHAR(100), nullable)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## Error Handling

All endpoints return consistent JSON responses:

**Success:**
```json
{
  "success": true,
  "data": {...},
  "message": "Success message"
}
```

**Error:**
```json
{
  "success": false,
  "message": "Error message"
}
```

## Development

- The server uses `nodemon` for auto-reloading during development
- All database queries use connection pooling for better performance
- CORS is enabled to allow frontend connections
- Request logging is enabled with Morgan middleware

## Troubleshooting

1. **Database connection error**: Make sure MySQL is running and credentials in `.env` are correct
2. **Port already in use**: Change the PORT in `.env` file
3. **Table doesn't exist**: Run the `database/schema.sql` script

## License

ISC

