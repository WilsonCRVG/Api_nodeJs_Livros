import mongoose from "mongoose"

mongoose.connect("mongodb+srv://wilsoncrvg:1346798520@node.hbchpfr.mongodb.net/node-express");
//"mongodb+srv://wilsoncrvg:1346798520@node.hbchpfr.mongodb.net/Api_nodeJs_Livros"

let db = mongoose.connection;

export default db;

