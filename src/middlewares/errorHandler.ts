import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err.stack);
  res.status(500).send("Something broke!");
};

export default errorHandler;
