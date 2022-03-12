const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { resolvers } = require('./resolvers');
const { schema } = require('./schema');

const app = express();
const port = process.env.Port || 8000;

app.get('/', (req, res) => {
    res.send("Welcome to Invoice Api");
})

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))


app.listen(port, () => {
    console.log(`Running at port ${port}`);
})