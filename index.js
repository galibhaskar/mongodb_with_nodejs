// import { MongoClient } from "mongodb";
import db from "./database/connect.js";
import express, { json } from "express";
import hotelModel from "./model/hotel.js";

const app = express();

app.use(json());

// // mongo setup

// const url = `mongodb://127.0.0.1:27017/`;

// const mongodbClient = new MongoClient(url);

// const connectMongoClient = async () => {
//   await mongodbClient.connect();
// };

// const databaseName = "bcamp_test";
// // end of mongo setup

// ---------------doc creation------------------------

// Task: create a new document in a collection name - airbnbs
// fields in doc: name, bedrooms, bathrooms, rating

// async function addListingToAirbnb(client, dataOfNewlisting) {
//   const result = await client
//     .db(databaseName)
//     .collection("airbnbs")
//     .insertOne(dataOfNewlisting);

//   console.log(result);
// }

// ---------------end of doc creation-----------------

// ---------------find doc in collection------------------------

// Task: find a document in a collection by its name

// async function findListingInAirbnb(client, nameOfListing) {
//   const result = await client
//     .db(databaseName)
//     .collection("airbnbs")
//     .findOne({ name: nameOfListing });

//   console.log(result);
// }

// ---------------end of find doc in collection-----------------

// ---------------find doc in collection------------------------

// Task: find a top 2 documents where rating is maximum

// async function getTop2ByRating(client) {
//   const result = await client
//     .db(databaseName)
//     .collection("airbnbs")
//     .find()
//     .sort({ rating: -1 })
//     .limit(2);

//   console.log(result);
// }

// ---------------end of find doc in collection-----------------

// --------------------------------mongoose----------------------------

const insertNewHotel = async () => {
  let newHotelDoc = new hotelModel({
    name: "My big hotel 2",
    bedrooms: 2,
    bathrooms: 2,
    rating: 4.5,
    email: "test@gmail.com",
  });

  let result = await newHotelDoc.save();

  console.log(result);
};

// --------------------------------end of mongoose----------------------

let PORT = 1234;

app.listen(PORT, async function () {
  // await connectMongoClient();

  // console.log("connect established with mongo client");

  // addListingToAirbnb(mongodbClient, {
  //   name: "My Comfy Living",
  //   bedroom: 2,
  //   bathrooms: 2,
  //   rating: 4.3,
  // });

  // findListingInAirbnb(mongodbClient, "My Comfy Living");

  // getTop2ByRating(mongodbClient);

  await insertNewHotel();

  console.log(`listening at port:${PORT}`);
});
