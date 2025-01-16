import { Request, Response } from "express";

const userController = {
  readAll: (req: Request, res: Response) => {
    try {
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  },
  readOne: (req: Request, res: Response) => {},
  create: (req: Request, res: Response) => {},
  updateOne: (req: Request, res: Response) => {},
  deleteOne: (req: Request, res: Response) => {},
};
export default userController;
