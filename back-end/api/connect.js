import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const DB_PASS = process.env.DB_PASS;
const URL =
  `mongodb+srv://admin:${DB_PASS}@spotify-project.dysgh.mongodb.net/?retryWrites=true&w=majority&appName=spotify-project"`;

console.log(URL)

const client = new MongoClient(URL);

export const db = client.db("db-spotify");
