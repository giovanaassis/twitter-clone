import * as signup from "./signup.js";
import * as login from "./login.js";
import * as logout from "./logout.js";
import * as getMe from "./getMe.js";

export const AuthController = {
  ...signup,
  ...login,
  ...logout,
  ...getMe,
};
