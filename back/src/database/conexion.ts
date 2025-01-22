import { DataSource } from "typeorm";
import { User } from "../models/userEntity";
import { Product } from "../models/productEntity";
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Lucas7698",
  database: "inventario",
  synchronize: true, //crea las tablas y relaciones en la base de datos si no existen. no recomendado en produccion
  logging: true,
  entities: [User, Product],
  subscribers: [],
  migrations: [],
});
