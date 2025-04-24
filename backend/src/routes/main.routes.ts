import { Router } from "express";
import authRouter from "./auth.routes";
import productRouter from "./product.routes";

const mainRouter = Router({ mergeParams: true });

mainRouter.use("/auth", authRouter);
mainRouter.use("/product", productRouter);

export default mainRouter;
