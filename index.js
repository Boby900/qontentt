const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./graphql/Schema");
const resolvers = require("./graphql/Resolvers");
const PORT = 3000
require('dotenv').config()
const app = express();
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'bob'
// Connect to MongoDB

mongoose.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(
        console.log(`Connected to ${dbName} Database`)
      
    )
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(
  "/",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})