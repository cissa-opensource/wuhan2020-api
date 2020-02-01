import * as path from "path";
import { makeSchema } from "nexus";
import * as types from "./types/index";

const GraphQLSchema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, "../generated/nexus/wuhan2020-api.graphql"),
    typegen: path.join(__dirname, "../generated/nexus/wuhan2020-api-typegen.ts"),
  },
});

export { GraphQLSchema }