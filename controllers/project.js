const Project = require('../models/Project');
const Task = require('../models/Task');
const keys = require('../config/keys');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const _ = require('lodash'); 

class ProjectController{
    
    /**
     * Method for displaying all projects related to the user
     * @param {Object} req
     * @param {Object} res
     * @return List of all projects
     */
    
     static async listAllProjects(req,res){
         try{
            const token = req.header('Authorization').replace('Bearer ', '')
            const decoded = jwt.verify(token,keys.secretKey);
            const userData = await User.findOne({_id:decoded.id}).populate({path:'projects',populate:{path:'admin',select:{'name':1,'_id':0}}});
            res.status(200).json({"body":{projects:userData.projects},"error":null});
         }
         catch(e){
            console.log(e);
            res.status(500).json({"body":null,"error":e});
         }
     }

     /**
      * Method for creating new project
      * @param {Object} req
      * @param {Object} res
      */

      static async createNewProject(req,res){
         try{
            const token = req.header('Authorization').replace('Bearer ', '');
            const decoded = jwt.verify(token,keys.secretKey);
            if(decoded!=null){
               const newProject = {
                  name:req.body.name,
                  description:req.body.description,
                  duration:req.body.duration,
                  startDate: new Date(),
                  admin: decoded.id
               };
               const projectData = await (await Project.create(newProject)).populate({path:'admin',select:{'name':1}});
               const userData = await User.findByIdAndUpdate(decoded.id,{$push:{projects:projectData._id}});
               res.status(200).json({"body":{projectId:projectData._id},"error":null});
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
       * Method for fetching project details
       * @param {Object} req
       * @param {Object} res
       */

       static async getProjectDetails(req,res){
          try{
            const token = req.header('Authorization').replace('Bearer ', '');
            const decoded = jwt.verify(token,keys.secretKey);
            if(decoded!=null){
               const projectData = await (Project.findById(req.params.projectId)).populate(
                  [{
                     path:'tasks',
                     select:{'name':1,_id:1,startDate:1,endDate:1,status:1}
                  },{
                     path:'admin',
                     select:{'name':1,_id:1}
                  }]);
               if(projectData!=null){
                  res.status(200).json({"body":{projectData:projectData},"error":null});
               }
               else{
                  res.status(404).json({"body":"Project not found","error":null});
               }
               
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
        * Method for updating project details
        * @param {Object} req
        * @param {Object} res
        */

        static async updateProject(req,res){
         try{
            const token = req.header('Authorization').replace('Bearer ', '');
            const decoded = jwt.verify(token,keys.secretKey);
            if(decoded!=null){
               const projectData = await Project.findByIdAndUpdate(req.body.id,{$set:{description:req.body.description,duration:req.body.duration,name:req.body.name}},{new:true}).populate({path:'admin',select:{'name':1,_id:0}});
               res.status(200).json({"body":{projectData:projectData},"error":null});
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
        * Method for deleting project
        * @param {Object} req
        * @param {Object} res
        */

        static async deleteProject(req,res){
           try{
               const token = req.header('Authorization').replace('Bearer ', '');
               const decoded = jwt.verify(token,keys.secretKey);
               if(decoded!=null){ 
                  const projectData = await Project.findById(req.body.id,{admin:1,tasks:1}).populate({path:'tasks',select:{_id:1,assignee:1}});
                  let userIds = [],taskIds =[];
                  userIds.push(projectData.admin);
                  projectData.tasks.forEach(task=>{
                     task.assignee.forEach(assignee=>{
                        if(userIds.indexOf(assignee)==-1) userIds.push(assignee);
                     });
                     taskIds.push(task._id);
                  });
                  userIds.forEach(userId=>{
                     User.findByIdAndUpdate(userId,{$pull:{projects:req.body.id}});
                  });
                  taskIds.forEach(taskId=>{
                     Task.findByIdAndDelete(taskId);
                  });
                  await Project.findByIdAndDelete(req.body.id);
                  res.status(200).json({"body":{projectData:"success"},"error":null});
               }
           }
           catch(err){
               console.log(err);
               res.status(500).json({"body":null,"error":err});
           }
        }
}

module.exports = ProjectController;