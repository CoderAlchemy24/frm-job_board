import { MongoClient } from "mongodb";
import data from "../../public/data.json" with { type: "json" };


const uri = "mongodb+srv://eo69mzx_db_user:XQYQpSlTzaO6lJaL@cluster0.wl92s6v.mongodb.net/";
const client = new MongoClient(uri);

async function importData() {
  try {
    await client.connect();

    const db = client.db("jobsdb");
    const collection = db.collection("jobs");

    const result = await collection.insertMany(data);

    console.log(`Inserted: ${result.insertedCount}`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

importData();