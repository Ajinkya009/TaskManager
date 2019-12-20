'use strict';

let mongoose = require("mongoose");
var Schema = mongoose.Schema;
let UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    projects:[{type:Schema.Types.ObjectId, ref:'Project'}]
});

let User = mongoose.model('User', UserSchema);

module.exports = User;