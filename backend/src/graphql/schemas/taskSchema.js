import { gql } from 'apollo-server';

// GraphQL schema for tasks
export const typeDefs = gql`
  type Task {
    _id: ID!
    title: String!
    description: String
    status: String!
    dueDate: String
  }

  type Query {
    tasks(status: String): [Task]
    task(id: ID!): Task
  }

  type Mutation {
    addTask(title: String!, description: String, status: String!, dueDate: String): Task
    updateTaskStatus(id: ID!, status: String!): Task
  }
`;