import { queryField } from "nexus";
import { IContext } from "../context";
import { User } from "./database";

export const users = queryField("users", {
  list: true,
  type: User,
  resolve: (root, args, context: IContext) => {
    return context.db.user.findMany();
  }
});