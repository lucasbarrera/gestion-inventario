import { Request, Response } from "express";

import { AppDataSource } from "../database/conexion";
import { Product } from "../models/productEntity";
import { read } from "fs";
import { create } from "domain";

const ProductRepository = AppDataSource.getRepository(Product);

const productController = {
  readAll: async (req: Request, res: Response) => {
    try {
      const data = await ProductRepository.find();
      res.status(200).json(data);
      if (!data) {
        res.status(404).json({ message: "No products found" });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  },
  create: async (req: Request, res: Response) => {},
  readOne: async (req: Request, res: Response) => {},
  updateOne: async (req: Request, res: Response) => {},
  deleteOne: async (req: Request, res: Response) => {},
};
export default productController;
