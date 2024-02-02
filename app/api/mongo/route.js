import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
// Replace the uri string with your connection string.

export async function GET(){

const uri =
  "mongodb+srv://Priya123:PasswordIs123@cluster0.7kbuxuc.mongodb.net/";

const client = new MongoClient(uri);

  try {
    const database = client.db("Stocks");
    const inventory = database.collection("inventory");

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const allProducts = await inventory.find(query).toArray();

    // console.log(movie);
    return NextResponse.json ({allProducts})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}