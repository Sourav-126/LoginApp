🚀 Node.js Backend API
A modern TypeScript backend API built with Express, Zod validation, and Prisma ORM.
✨ Tech Stack

Node.js - JavaScript runtime
Express - Fast, unopinionated web framework
TypeScript - Typed JavaScript for better developer experience
Zod - Schema validation with static type inference
Prisma ORM - Next-generation database ORM
PNPM - Fast, disk space efficient package manager

📁 Project Structure
.
├── package.json          # Project dependencies and scripts
├── pnpm-lock.yaml        # PNPM lock file
├── tsconfig.json         # TypeScript configuration
└── src/
    ├── index.ts          # Main application entry point
    ├── types/
    │   └── user.ts       # User type definitions
    ├── middleware/
    │   └── middleware.ts # Express middleware functions
    └── routes/
        └── userRouter.ts # User routes and controllers
🚀 Getting Started
Prerequisites

Node.js (v14 or higher)
PNPM

Installation
bash# Clone the repository
git clone <repository-url>
cd <project-directory>

# Install dependencies
pnpm install

# Start the server
pnpm run start
💾 Database Configuration
This project uses Prisma ORM to interact with your database. Configure your database connection in .env:
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
🔐 Environment Variables
Create a .env file in the root directory:
PORT=3000
NODE_ENV=development
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret

📋 Available Scripts

pnpm run start - Start the production server

🧩 Type Validation with Zod
Example of request validation:
typescriptimport { z } from 'zod';

const UserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  password: z.string().min(6)
});

// Use in routes for validation
🔄 Middleware
Custom middleware for authentication, logging, and error handling are located in src/middleware/middleware.ts.
📄 License
This project is licensed under the MIT License.
