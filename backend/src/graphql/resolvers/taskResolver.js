import * as TaskModel from '../../models/taskModel.js';

// Resolvers map GraphQL operations to your database functions
export const resolvers = {
  Query: {
    tasks: (_, { status }) => TaskModel.getTasks(status),
    task: (_, { id }) => TaskModel.getTaskById(id),
  },
  Mutation: {
    addTask: (_, { title, description, status, dueDate }) =>
      TaskModel.addTask({ title, description, status, dueDate }),
    updateTaskStatus: (_, { id, status }) =>
      TaskModel.updateTaskStatus(id, status),
  },
};