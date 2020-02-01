import { objectType } from "nexus";

// Each field is assumed to have the option { nullable: false } unless specified

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("email");
    t.boolean("hasRegistered");
    t.string("createdAt");
    t.string("updatedAt");
  }
});