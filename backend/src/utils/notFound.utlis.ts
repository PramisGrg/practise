import { Request, Response } from "express";

export const notFoundUtlis = async (
  req: Request,
  res: Response
): Promise<void> => {
  res
    .status(404)
    .json({ message: "Sorry requested resources not found in the server" });
};
