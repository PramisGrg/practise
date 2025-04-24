import { Request, Response } from "express";

export const loginUserController = () => {
  console.log("Iam ar");
};

export const registerUserController = (req: Request, res: Response) => {
  console.log(req.body, "This is request body");
  res
    .status(200)
    .json({ message: "Register endpoint reached", data: req.body });
};
