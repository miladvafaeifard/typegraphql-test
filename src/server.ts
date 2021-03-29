import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './domains/simple/schema';

export async function startup() {
  const app = express();
  const server = new ApolloServer({
      schema: await schema()
  });
  await server.start();

  server.applyMiddleware({ app });

  app.use((req, res) => {
    res.status(200);
    res.send(`Server is ready to use graphql: http://localhost:4000${server.graphqlPath}`);
    res.end();
  });

  await new Promise(resolve => app.listen({ port: 4000 }, () => resolve('starting listen...')));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}
