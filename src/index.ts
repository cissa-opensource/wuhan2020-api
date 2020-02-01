import * as path from "path";
import { GraphQLServer } from "graphql-yoga";
import "./env";
import { PrismaClient } from "@prisma/client";
import { GraphQLSchema } from "./graphql/schema";

// Initialise database connection via Photon.
const db = new PrismaClient();

// Create a GraphQL server using the GraphQL schema we generated in the folder "graphql"
const server = new GraphQLServer({
  schema: GraphQLSchema,
  context: request => {
    return {
      ...request,
      db
    };
  }
});

// Define extra routes to serve static file
server.express.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Define options for our GraphQL server, such as the GraphQL endpoint and playground URL
const options = {
  port: 4000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};

// Start server
server.start(options)
  .then(() => console.log(`Server has started at localhost:${options.port}`));