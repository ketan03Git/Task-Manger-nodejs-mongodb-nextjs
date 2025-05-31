'use client';

import { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_TASKS = gql`
  query Tasks($status: String) {
    tasks(status: $status) {
      _id
      title
      status
      dueDate
    }
  }
`;

const ADD_TASK = gql`
  mutation AddTask($title: String!, $description: String, $status: String!, $dueDate: String) {
    addTask(title: $title, description: $description, status: $status, dueDate: $dueDate) {
      _id
      title
      status
      dueDate
    }
  }
`;

const UPDATE_TASK_STATUS = gql`
  mutation UpdateTaskStatus($id: ID!, $status: String!) {
    updateTaskStatus(id: $id, status: $status) {
      _id
      status
    }
  }
`;

type Task = {
  _id: string;
  title: string;
  status: string;
  dueDate?: string;
  description?: string;
};

export default function Home() {
   // State for filter and form
 const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

    // Apollo hooks
  const { data, loading, error, refetch } = useQuery<{ tasks: Task[] }>(GET_TASKS, {
    variables: { status: statusFilter },
  });
  const [addTask, { loading: adding }] = useMutation(ADD_TASK, {
    refetchQueries: [{ query: GET_TASKS, variables: { status: statusFilter } }],
  });
  const [updateTaskStatus] = useMutation(UPDATE_TASK_STATUS, {
    refetchQueries: [{ query: GET_TASKS, variables: { status: statusFilter } }],
  });

const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

    // ...handlers below...
    // Filter handler
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setStatusFilter(value === 'All' ? undefined : value);
    refetch({ status: value === 'All' ? undefined : value });
  };

  // Add task - handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    await addTask({
      variables: {
        title,
        description,
        status: 'Todo',
        dueDate,
      },
    });
    setTitle('');
    setDescription('');
    setDueDate('');
  };

    // Update status handler (inline in JSX)
 if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error.message}</div>;

  return (
   <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>

       {/* Filter Dropdown */}
      <div className="mb-4">
        <select
          className="border p-2 rounded"
          value={statusFilter || 'All'}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

        {/* Add Task Form */}
      <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-2">
        <input
          className="border p-2 rounded"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          className="border p-2 rounded"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Due Date (YYYY-MM-DD)"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={adding}
        >
          {adding ? 'Adding...' : 'Add Task'}
        </button>
      </form>

     {/* Task List */}
     
       <ul>
  {data?.tasks.map((task) => (
    <li key={task._id} className="mb-2 p-2 border rounded flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="font-semibold">{task.title}</span>
        <span className="ml-2 text-gray-500">{task.dueDate}</span>
        <button
          className="ml-2 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setSelectedTaskId(selectedTaskId === task._id ? null : task._id)}
        >
          {selectedTaskId === task._id ? "Hide" : "View"}
        </button>
        <select
          className="ml-2 border rounded"
          value={task.status}
          onChange={e =>
            updateTaskStatus({ variables: { id: task._id, status: e.target.value } })
          }
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      {selectedTaskId === task._id && (
        <div className="mt-2 p-3 border rounded bg-gray-50">
          <p><strong>Description:</strong> {task.description || "No description"}</p>
          <p><strong>Status:</strong> {task.status}</p>
          <p><strong>Due Date:</strong> {task.dueDate || "N/A"}</p>
        </div>
      )}
    </li>
  ))}
</ul>
    </div>
  );
}