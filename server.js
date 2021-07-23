const express = require('express');
const MyGraphQLSchema = require('./schema');
const cors =require('cors')

const { graphqlHTTP } = require('express-graphql');

const app = express();
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  }),
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log( `Server listening on http://localhost:${PORT}`) );