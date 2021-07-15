
const mongoose = require("mongoose");
require('dotenv').config()
mongoose.Promise = global.Promise;


const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_URI;
db.userList = require("./userList.js")(mongoose);

module.exports = db;