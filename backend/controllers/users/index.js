import * as signup from "./signup.js";
import * as login from "./login.js";
import * as logout from "./logout.js";

export const UsersController = {
  ...signup,
  ...login,
  ...logout,
};
