const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/final_project_attempt_5"
);

// const userSeed = [
//   {
//     firstName: "Raman",
//     lastName: "Aryana",
//     email:"14raryana@gmail.com",
//     password: "Ponyboy9",
//     date: new Date(Date.now())
//   },
//   {
//     firstName: "Rayan",
//     lName: "Aryana",
//     email:"16raryana@gmail.com",
//     password: "stupidFuckingIdiot",
//     date: new Date(Date.now())
//   },
//   {
//     firstName: "Seper",
//     lName: "Sherry",
//     email:"jayson528491@gmail.com",
//     password: "pepedro",
//     date: new Date(Date.now())
//   }
// ];
