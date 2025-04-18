# 🚀 React Frontend 

A modern React frontend built with Vite and JavaScript, using Axios for API communication.

## ✨ Tech Stack

- **React** - UI library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **JavaScript** - Programming language
- **Axios** - Promise-based HTTP client
- **PNPM** - Fast, disk space efficient package manager

## 📁 Project Structure

```
.
├── public/               # Static assets 
├── src/                  # Source files
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # Reusable components
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Application pages
│   ├── services/         # API services
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Git ignore file
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── pnpm-lock.yaml        # PNPM lock file
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PNPM

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd <project-directory>

# Install dependencies
pnpm install

# Start the development server
pnpm run dev
```

## 🔌 API Integration

This project uses Axios for API communication. API services are located in the `src/services` directory.

Example of an API service:

```javascript
// src/services/api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_BASE_URL=http://localhost:3000/api
```

## 📋 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build locally
- `pnpm run lint` - Lint the codebase
- `pnpm run test` - Run tests

## 🧩 Component Structure

Com
