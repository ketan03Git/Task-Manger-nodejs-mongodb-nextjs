# Task Manager App – Full Stack (Node.js, GraphQL, MongoDB, Next.js, Apollo, Tailwind CSS)

This is a **full-stack Task Management application** featuring a Node.js backend with GraphQL and MongoDB, and a Next.js frontend using Apollo Client and Tailwind CSS.

---

## 🚀 Features

- **View all tasks**
- **Filter tasks by status** ("Todo", "In Progress", "Done")
- **Add new tasks** via a form
- **Update task status** (dropdown)
- **View task details** (dedicated page)
- **Responsive, modern UI** with Tailwind CSS

---

## 🗂️ Project Structure

```
task-manager-app/
├── backend/      # Node.js, Apollo Server, MongoDB
│   ├── src/
│   ├── .env
│   └── README.md
└── frontend/     # Next.js, Apollo Client, Tailwind CSS
    ├── src/
    ├── public/
    ├── .env.local (optional)
    └── README.md
```

---

## 🛠️ Requirements

- Node.js 18+
- npm
- MongoDB Atlas account (or local MongoDB)
- GitHub account (for code hosting)

---

## ⚙️ Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>/task-manager-app
```

---

### 2. **Backend Setup**

```bash
cd backend
npm install
```

- Create a `.env` file:
  ```
  MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority&appName=<appName>
  ```

- Start the backend server:
  ```bash
  node src/index.js
  ```
  The server runs at [http://localhost:4000/graphql](http://localhost:4000/graphql) (or your Codespaces URL).

---

### 3. **Frontend Setup**

```bash
cd ../frontend
npm install
```

- Start the frontend dev server:
  ```bash
  npm run dev
  ```
  The app runs at [http://localhost:3000](http://localhost:3000) (or your Codespaces URL).

---

## 📝 GraphQL API Overview

### **Task Type**
- `title` (String)
- `description` (String)
- `status` (String: "Todo", "In Progress", "Done")
- `dueDate` (String)

### **Queries**
- `tasks(status: String): [Task]` – Get all tasks, optionally filtered by status
- `task(id: ID!): Task` – Get a single task by ID

### **Mutations**
- `addTask(title, description, status, dueDate): Task` – Add a new task
- `updateTaskStatus(id, status): Task` – Update a task's status

---

## 🖥️ Frontend Features

- **Task List Page:** View, filter, and update tasks.
- **Task Details Page:** Click a task to view all its details.
- **Add Task Form:** Add new tasks with title, description, status, and due date.
- **Status Update:** Change status via dropdown.
- **Responsive UI:** Styled with Tailwind CSS.

---

## 💡 Tips

- Use [Apollo Studio](https://studio.apollographql.com/) or the built-in GraphQL Playground to test backend queries/mutations.
- Make sure your MongoDB Atlas cluster allows connections from your IP or Codespaces.
- For deployment, consider [Vercel](https://vercel.com/) (frontend) and [Render](https://render.com/) or [Railway](https://railway.app/) (backend).

---

## 📄 License

MIT

---

## 🙋‍♂️ Author

- [Ketan Muttelwar](https://github.com/ketan03Git)

---

**Enjoy building and managing your tasks!**
