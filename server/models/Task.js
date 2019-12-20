'use strict';

let mongoose = require("mongoose");
var Schema = mongoose.Schema;
let TaskSchema = new mongoose.Schema({
    name:String,
    description:String,
    startDate:String,
    endDate:String,
    project:{type:Schema.Types.ObjectId, ref:"Project"},
    status:{type:String,default:'to-do'},
    admin:{type:Schema.Types.ObjectId, ref:'User'},
    assignee:[{type:Schema.Types.ObjectId, ref:'User'}]
});

let Task = mongoose.model('Task', TaskSchema);

module.exports = Task;