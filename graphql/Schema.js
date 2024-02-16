const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Book {
    id: ID!
    name: String!
    age: Int!
    email: String!

  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int!): User
    deleteUser(id: ID!): User
  }
`);

module.exports = schema;