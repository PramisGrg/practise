import { Router } from "express";
import authRouter from "./auth.router";
import productRouter from "./product.router";

const mainRouter = Router({ mergeParams: true });

mainRouter.use("/auth", authRouter);
mainRouter.use("/product", productRouter);

export default mainRouter;
