import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("products")
export class Product {
  static find() {
    throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  image: string;
  @Column()
  barcode: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  inventary_min: number;
  @Column()
  price_in: number;
  @Column()
  price_out: number;
  @Column()
  unit: string;
  @Column()
  presentation: string;
  @Column()
  user_id: number;
  @Column()
  category_id: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
