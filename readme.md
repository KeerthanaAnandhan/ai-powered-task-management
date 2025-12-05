# AI Task Manager

A modern, responsive task management app with AI-powered deadline prediction.

## 🚀 Features

- Role-based access:
  - **User**: View tasks, mark as completed, see pending/overdue tasks.
  - **Admin**: Add tasks, predict deadlines based on task complexity (easy, medium, hard), manage tasks.
- Tasks stored in **localStorage** to persist across page reloads.
- Clean, mobile-friendly, and dark/light mode compatible UI.
- Color-coded task statuses: **Pending**, **Completed**, **Overdue**.
- AI-style deadline prediction for tasks.

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/KeerthanaAnandhan/ai-powered-task-management
cd/ai-powered-task-management

Install dependencies:

npm install
Start the app:

npm start
Open http://localhost:3000 in your browser.

📝 Usage
Default role: User. Use the "Switch Role" button to toggle to Admin.

In Admin mode, you can:

Add new tasks with difficulty.

Predict deadlines automatically.

Manage tasks (mark complete, delete).

In User mode, only the dashboard is visible, and Add Task page is disabled.

💡 Sample Tasks
You can use these tasks for testing:


[
  {
    "title": "Design Login Page",
    "description": "Create responsive login page with dark/light mode",
    "assignee": "user",
    "complexity": "easy"
  },
  {
    "title": "Build Dashboard API",
    "description": "API for tasks CRUD operations",
    "assignee": "user",
    "complexity": "medium"
  },
  {
    "title": "Admin Add Task UI",
    "description": "Form for adding new tasks with predicted deadlines",
    "assignee": "admin",
    "complexity": "hard"
  }
]
You can load them into localStorage manually for demo purposes.

🎨 UI / UX
Modern gradient navbar and AI-style logo.

Tasks are displayed as cards with status badges.

Fully mobile-friendly with dark/light mode.

Predict Deadline button calculates deadlines based on task difficulty:

Easy → +2 days

Medium → +5 days

Hard → +10 days

⚡ Tech Stack
React.js (Frontend)

React Router DOM (Routing)

Tailwind CSS (Styling)

LocalStorage (Persistence)

Day.js (Date management)

## Demo
-Link: https://mellifluous-sunburst-98dc6e.netlify.app/
