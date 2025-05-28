# Task Manager App – Backend

This is the **backend** for the Task Manager application, built with **Node.js**, **Apollo Server (GraphQL)**, and **MongoDB**.

---

## 🚀 Getting Started

### 1. **Install Dependencies**

```bash
cd task-manager-app/backend
npm install
```

---

### 2. **Configure Environment Variables**

Create a `.env` file in this folder with your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority&appName=<appName>
```

---

### 3. **Run the Server**

```bash
node src/index.js
```

The server will start on [http://localhost:4000/graphql](http://localhost:4000/graphql) (or your Codespaces URL).

---

## 🗂️ Project Structure

```
backend/
├── src/
│   ├── db/           # MongoDB connection logic
│   ├── resolvers/    # GraphQL resolvers
│   ├── schema/       # GraphQL schema
│   └── index.js      # Server entry point
├── .env              # Environment variables
├── package.json
└── README.md
```

---

## 📝 GraphQL API

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

## 🛠️ Requirements

- Node.js 18+
- MongoDB Atlas or local MongoDB instance

---

## 💡 Tips

- Use [Apollo Studio](https://studio.apollographql.com/) or the built-in GraphQL Playground to test queries and mutations.
- Make sure your MongoDB Atlas cluster allows connections from your IP or Codespaces.

---

## 📄 License

MIT
