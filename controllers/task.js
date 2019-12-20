const Project = require('../models/Project');
const Task = require('../models/Task');
const keys = require('../config/keys');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const moment = require('moment');
const mongoose = require('mongoose');
class TaskController{
    
     /**
      * Method for creating new task
      * @param {Object} req
      * @param {Object} res
      */

      static async createNewTask(req,res){
         try{
            const token = req.header('Authorization').replace('Bearer ', '');
            const decoded = jwt.verify(token,keys.secretKey);
            if(decoded!=null){
               const newTask = {
                  name:req.body.name,
                  admin:decoded.id,
                  startDate: moment().format('L'),
                  endDate: moment().format('L'),
                  project: req.body.projectId
               };
               const taskData = await Task.create(newTask);
               const projectData = await Project.findByIdAndUpdate(req.body.projectId,{$push:{tasks:taskData._id}});
               res.status(200).json({"body":{taskId:taskData._id},"error":null});
            }
            else{
               res.status(401).json({"body":null,"error":"Unauthorized access!"});
            }
            
         }
         catch(err){
            console.log(err);
            res.status(500).json({"body":null,"error":err});
         }
      }

      /**
       * Method for fetching task details
       * @param {Object} req
       * @param {Object} res
       */

       static async getTaskDetails(req,res){
          try{
            const token = req.header('Authorization').replace('Bearer ', '');
            const decoded = jwt.verify(token,keys.secretKey);
            if(decoded!=null){
                console.log("here");
               const taskData = await (Task.findById(req.params.taskId)).populate([
                   {path:'admin',select:{'name':1,_id:0}},
                   {path:'assignee',select:{'name':1,_id:0}}
                ]);
               res.status(200).json({"body":{taskData:taskData},"error":null});
            }
            else{
               res.status(401).json({"body":null,"error":"Unauthorized access!"});
            }
          }  
          catch(err){
               console.log(err);
               res.status(500).json({"body":null,"error":err});
          } 
       }

       /**
        * Method for updating task details
        * @param {Object} req
        * @param {Object} res
        */

        static async updateTask(req,res){
         try{
            const token = req.header('Authorization').replace('Bearer ', '');
            const decoded = jwt.verify(token,keys.secretKey);
            console.log(decoded);
            if(decoded!=null){
                
                const {name,description,status,startDate,endDate} = req.body;
               const data = await Task.findByIdAndUpdate(req.body._id,{$set:
                {   
                    description:description,
                    startDate:startDate,
                    endDate:endDate,
                    name:name,
                    status:status
                }
                });
               res.status(200).json({"body":"Updated successfully!","error":null});
            }
            else{
               res.status(401).json({"body":null,"error":"Unauthorized access!"});
            }
          }  
          catch(err){
               console.log(err);
               res.status(500).json({"body":null,"error":err});
          } 
        }

        /**
        * Method for adding assignees
        * @param {Object} req
        * @param {Object} res
        */

        static async addAssignees(req,res){
            try{
                const token = req.header('Authorization').replace('Bearer ', '');
                const decoded = jwt.verify(token,keys.secretKey);
                if(decoded!=null){
                   const assignees = req.body.assignees.split(",");
                   console.log(assignees);
                   User.find({"email":{$in:assignees}},{_id:1},async (err,assigneeIds)=>{
                        if(err){
                            console.log(err);
                            res.status(404).json({"body":null,"error":"Email id not found!"});
                        }
                        else if(assigneeIds.length==0){
                            res.status(404).json({"body":null,"error":"Email id not found!"});
                        }
                        else{
                            const ids = assigneeIds.map(assignee=>{return assignee._id});
                            
                            await User.updateMany({_id:{$in:ids}},{$addToSet:{projects:req.body.projectId}});
                            const taskData = await Task.findOneAndUpdate({_id:req.body.taskId},{$addToSet:{assignee:ids}},{new:true}).populate({path:'assignee',select:{'name':1,_id:0}});
                            console.log(taskData);
                            res.status(200).json({"body":{taskData:taskData},"error":null});
                        }
                   });
                }
                else{
                   res.status(401).json({"body":null,"error":"Unauthorized access!"});
                }
            }  
            catch(err){
                console.log(err);
                res.status(500).json({"body":null,"error":err});
            } 
        }

        /**
        * Method for deleting task
        * @param {Object} req
        * @param {Object} res
        */

       static async deleteTask(req,res){
        try{
            const token = req.header('Authorization').replace('Bearer ', '');
            const decoded = jwt.verify(token,keys.secretKey);
            if(decoded!=null){ 
               const taskData = await Task.findById(req.body.id,{project:1,_id:0});
               Project.findByIdAndUpdate(taskData.project,{$pull:{tasks:req.body.id}});
               await Task.findByIdAndDelete(req.body.id);
               res.status(200).json({"body":{projectData:"success"},"error":null});
            }
        }
        catch(err){
            console.log(err);
            res.status(500).json({"body":null,"error":err});
        }
     }

}



module.exports = TaskController;