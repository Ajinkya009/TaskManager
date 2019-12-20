'use strict';

let mongoose = require("mongoose");
var Schema = mongoose.Schema;
let ProjectSchema = new mongoose.Schema({
    name:String,
    description:String,
    startDate: String,
    duration:String,
    admin:{type:Schema.Types.ObjectId, ref:'User'},
    tasks:[{type:Schema.Types.ObjectId, ref:'Task'}]
});

let Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;