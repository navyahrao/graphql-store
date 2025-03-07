import mongoose from "mongoose";

async function connectMongo() {
  try {
    await mongoose.connect("mongodb://localhost:27017/store");
  } catch (err) {
    console.log(err);
  }
}

connectMongo();

const storeSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  soldOut: String,
  inventory: Number,
  stores: Array,
});

const Store = mongoose.model("store", storeSchema);

export { Store };
