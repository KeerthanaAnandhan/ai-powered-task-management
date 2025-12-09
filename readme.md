# AI Task Manager

A modern, responsive task management application with AI-style deadline prediction, built using React.js and Tailwind CSS.

**Live Demo:** https://mellifluous-sunburst-98dc6e.netlify.app/

---

## Features

### Role-Based Access
- **User**
  - View tasks
  - Mark tasks as completed
  - Track pending and overdue tasks
- **Admin**
  - Add tasks with complexity levels
  - Predict deadlines automatically
  - Manage tasks (complete or delete)

### AI-Style Deadline Prediction
Deadlines are assigned based on task complexity:
- Easy → +2 days  
- Medium → +5 days  
- Hard → +10 days  

### Additional Features
- Tasks stored using **localStorage**
- Color-coded statuses: Pending, Completed, Overdue
- Fully responsive and mobile-friendly
- Clean UI with dark/light mode support

---

## Installation

```bash
# Clone the repository
git clone https://github.com/KeerthanaAnandhan/ai-powered-task-management
cd ai-powered-task-management

# Install dependencies
npm install

# Start the app
npm start
```

Open: **http://localhost:3000**

---

## Usage

- Default role: **User**
- Use the **"Switch Role"** button to toggle between User and Admin

### Admin Capabilities
- Add tasks
- Predict deadlines automatically
- Mark tasks complete or delete tasks

### User Capabilities
- View and manage assigned tasks
- Check pending and overdue tasks

---

## Sample Tasks (For Testing)

```json
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
    "description": "Form for adding tasks with predicted deadlines",
    "assignee": "admin",
    "complexity": "hard"
  }
]
```

---

## Tech Stack

- React.js  
- React Router DOM  
- Tailwind CSS  
- LocalStorage  
- Day.js  

---

## Live Demo

https://mellifluous-sunburst-98dc6e.netlify.app/
