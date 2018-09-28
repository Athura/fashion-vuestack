const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

// Import typeDefs and resolvers

// Import Environment variables and mongoose models

// Connect to mlab database

// Create Apollo/Graphql Server using typeDefs, resolvers, and context headers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// initialize server, let us know what url graphiql is deployed to
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});