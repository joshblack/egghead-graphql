import express from 'express';
import graphQLHTTP from 'express-graphql';
import schema from './src';

const app = express();
const PORT = process.env.NODE_ENV || 3000;

app.use(graphQLHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${3000}`);
});
