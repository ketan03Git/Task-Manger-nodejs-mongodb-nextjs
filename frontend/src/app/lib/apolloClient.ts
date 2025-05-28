import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://friendly-computing-machine-9pq4pqvj69gc9x9g-4000.app.github.dev/graphql', // Use your Codespaces backend URL
  cache: new InMemoryCache(),
});

export default client;