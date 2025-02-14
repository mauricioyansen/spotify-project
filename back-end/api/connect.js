import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://admin:fe0vGpGgKbbZeVaP@spotify-project.dysgh.mongodb.net/?retryWrites=true&w=majority&appName=spotify-project";

const client = new MongoClient(URI);

export const db = client.db("db-spotify");
