import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Neo4jGraphQL } from "@neo4j/graphql";
import neo4j from "neo4j-driver";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config();
const __dirname = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname)).replace(/^\/([A-Za-z]:)/, "$1");

//read schema file
// const __dirname = path.dirname(new URL(import.meta.url).pathname);
const schemaPath = path.join(__dirname, "schema.graphql");
const typeDefs = fs.readFileSync(schemaPath, "utf8");

const driver = neo4j.driver(process.env.NEO4J_URI, neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD));



//Neo4jGraphQL from typedef
const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
  features: {
    generatedMutations: false,
    excludeDeprecatedFields: {
      implicitEqualFilters: true,
      deprecatedOptionsArgument: true,
      directedArgument: true,
    },
  },
});

//Apollo Server
const server = new ApolloServer({
  schema: await neoSchema.getSchema(),
  context: ({ req }) => ({
    driver,
  }),
  debug: true,
});

// Start server
// const { url } = await startStandaloneServer(server, {
//   context: async ({ req }) => ({ req }),
//   listen: { port: process.env.PORT },
// });


const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({
    req,
    driver,
  }),
  listen: {
    port: parseInt(process.env.PORT) || 4000,
  },
  cors: {
    origin: "*", // or specify a domain
    credentials: true,
  },
});

console.log(`🚀 Server ready at ${url}`);
