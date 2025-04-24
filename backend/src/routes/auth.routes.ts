import { Router } from "express";
import {
  loginUserController,
  registerUserController,
} from "../controllers/auth.controller";

const authRouter = Router({ mergeParams: true });

authRouter.post("/login", loginUserController);
authRouter.post("/register", registerUserController);

export default authRouter;
