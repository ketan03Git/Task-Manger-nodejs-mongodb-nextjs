import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/index.js';
import dotenv from 'dotenv';
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ 
  port: 4000,
  cors: {
    origin: '*', // Allow all origins for development
    credentials: true,
  }
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});