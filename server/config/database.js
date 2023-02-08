import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.ATLAS_URI;
// use as string

const database = async () => {
  try {
    connect(MONGO_URI, {
      /* Using the environment variable that we set in the .env file. */
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
}

export default database;
