'use client';

import { gql, useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';

const GET_TASK = gql`
  query Task($id: ID!) {
    task(id: $id) {
      _id
      title
      description
      status
      dueDate
    }
  }
`;

export default function TaskDetails() {
  const params = useParams();
  const { data, loading, error } = useQuery(GET_TASK, {
    variables: { id: params.id },
    skip: !params.id,
  });

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error.message}</div>;
  if (!data?.task) return <div className="p-8">Task not found.</div>;

  const { title, description, status, dueDate } = data.task;

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="mb-2"><strong>Status:</strong> {status}</p>
      <p className="mb-2"><strong>Due Date:</strong> {dueDate}</p>
      <p className="mb-2"><strong>Description:</strong> {description}</p>
    </div>
  );
}