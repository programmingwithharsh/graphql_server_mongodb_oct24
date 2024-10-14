const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require("mongoose");
const { resolvers } = require("./resolvers.js");
const { typeDefs } = require("./models/typeDefs.js");

const MONGO_URL = "mongodb://0.0.0.0:27017/dashboard"; // datatabase name is dashboard

// database connection 
mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected!'));

const server = new ApolloServer({
    typeDefs,
    resolvers
});

startStandaloneServer(server, {
    listen: { port: 4000 }
}).then(({ url }) => {
    console.log(`Server ready at: ${url}`);
})