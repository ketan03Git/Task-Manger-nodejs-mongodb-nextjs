import { connectDB } from '../db/mongo.js';
import { ObjectId } from 'mongodb';

export async function getTasks(status) {
  const db = await connectDB();
  const query = status ? { status } : {};
  return db.collection('tasks').find(query).toArray();
}

export async function getTaskById(id) {
  const db = await connectDB();
  return db.collection('tasks').findOne({ _id: new ObjectId(id) });
}

export async function addTask(task) {
  const db = await connectDB();
  const result = await db.collection('tasks').insertOne(task);
  return { _id: result.insertedId, ...task };
}

export async function updateTaskStatus(id, status) {
  const db = await connectDB();
  await db.collection('tasks').updateOne({ _id: new ObjectId(id) }, { $set: { status } });
  return getTaskById(id);
}