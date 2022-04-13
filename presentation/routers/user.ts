import * as express from "express";
import { UserControllers } from "../controllers/user";
import { auth } from "../middleware/auth";

const router = express.Router();
const userControllers = new UserControllers();

// route for logging-out a user
router.post("/logout/:uuid", auth, userControllers.logoutUser);

// route for Reading a user
router.get("/user/:uuid", auth, userControllers.getUserDetails);

// route for Deleting a user
router.delete("/user/:uuid", auth, userControllers.deleteUser);

// the following route is in main file index.ts
// create a user and login, or find a user and login
// app.get("/good", isLoggedInCb, userControllers.findOrCreateUser);

export { router };
