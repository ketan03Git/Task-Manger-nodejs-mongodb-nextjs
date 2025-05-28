import * as TaskModel from '../../models/taskModel.js';

// maps schema operations to actual JavaScript functions [calls model functions]
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