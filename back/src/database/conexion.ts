import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Lucas7698",
  database: "inventario",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
