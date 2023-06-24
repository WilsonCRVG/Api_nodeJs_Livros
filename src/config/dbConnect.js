import mongoose from "mongoose"

//const dbConfig = process.env.DB_CONFIG;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD

mongoose.connect("mongodb+srv://wilsoncrvg:1346798520@node.hbchpfr.mongodb.net/node-express");
//"mongodb+srv://wilsoncrvg:1346798520@node.hbchpfr.mongodb.net/node-express"
//"mongodb+srv://wilsoncrvg:1346798520@node.hbchpfr.mongodb.net/node-express"

let db = mongoose.connection;

export default db;

