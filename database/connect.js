import mongoose from "mongoose";

const server = `127.0.0.1:27017`;

const databaseName = "bcamp_test";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${databaseName}`)
      .then(() => console.log("connected to db"))
      .catch((err) => console.log(err));
  }
}

export default new Database();

// adding database instance to cache which will create only single instance.
