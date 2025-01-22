import { Request, Response } from "express";
import { User } from "../models/userEntity";
import { AppDataSource } from "../database/conexion";

const UserRepository = AppDataSource.getRepository(User); // getRepository(User) es un metodo de la clase DataSource que devuelve un repositorio de la entidad User. este repositorio es donde se ejecutaran los pedidos a la base de datos por medio de los metodos de la api de typeorm

const userController = {
  readAll: async (req: Request, res: Response) => {
    try {
      const data = await UserRepository.find(); // busca todos los usuarios en la base de datos
      res.status(200).json(data);
      if (!data) {
        res.status(404).json({ message: "No users found" });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  },
  readOne: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const oneUser = await UserRepository.findOneBy({ id: Number(id) }); //busca un usuario por su id
      res.status(200).json(oneUser);
      if (!oneUser) {
        res.status(404).json({ message: "User with these id not found" });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  },
  create: (req: Request, res: Response) => {
    try {
      const newUser = UserRepository.save(req.body); //guarda un nuevo usuario en la base de datos
      res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  },
  updateOne: (req: Request, res: Response) => {
    //actualizacion de un usuario
    const { id } = req.params;
    const user = UserRepository.findOneBy({ id: Number(id) }); //busca el usuario por su id
    if (!user) {
      res.status(404).json({ message: "User with these id not found" }); //si no encuentra el usuario devuelve un mensaje de error
    }
    UserRepository.update({ id: Number(id) }, req.body); //actualiza el usuario
    res.status(200).json({ message: "User updated" });
  },
  deleteOne: (req: Request, res: Response) => {
    const { id } = req.params;
    const user = UserRepository.findOneBy({ id: Number(id) }); //busca el usuario por su id
    if (!user) {
      res.status(404).json({ message: "User with these id not found" });
    }
    UserRepository.delete({ id: Number(id) });
    res.status(200).json({ message: "User deleted" }); //elimina el usuario
  },
};
export default userController;
