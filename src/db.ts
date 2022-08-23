import { DataSource } from 'typeorm';
import { User } from './entities/User'
import dotenv from 'dotenv'
dotenv.config()


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  port: 5432,
  database: 'typeormdb',
  entities: [User],
  logging: true,
  synchronize: true
});