const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../config/keys');

class UserController{

    /**
     * Method for signing up user
     * @param {Object} req 
     * @param {Object} res 
     * @return {Object} {
     * "body": Success if successfully signed up else null
     * "error": Error if any else null
     * }
     */

    static async signUp(req,res){
        try{
            const user = await User.findOne({'email':req.body.email});
            if(user==null){
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(req.body.password,salt);
                const newUser = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                };
                await User.create(newUser);
                res.status(200).json({"body":"Success","error":null});
            }
            else{
                res.status(409).json({"body":null,"error":"User already exists."});
            }
        }
        catch(e){
            console.log(e);
            res.status(500).json({"body":null,"error":e});
        }
    }

    /**
     * Method for user log in
     * @param {Object} req 
     * @param {Object} res
     * @return {
     * "body": jwt token if successfully logged in else null
     * "error": Error if any else null
     * } 
     */

    static async login(req,res){
        try{
            const user = await User.findOne({"email":req.body.email}).populate('projects');
            if(user==null){
                res.status(404).json({"body":null,"error":"Incorrect email/password"});
            }
            else{
                const compareResult = await bcrypt.compare(req.body.password,user.password);
                console.log(compareResult);
                if(compareResult==false){
                    res.status(404).json({"body":null,"error":"Incorrect email/password"});
                }
                else{
                    const userData = {
                        id:user._id,
                        name: user.name
                    };
                    jwt.sign(userData,keys.secretKey,{expiresIn: 31556926},(err,token)=>{
                        const tokenString = "Bearer "+token;
                        res.status(200).json({"body":{token:tokenString,projects:user.projects},"error":null});
                    });
                    
                }
            }
        }
        catch(e){
            console.log(e);
            res.status(500).json({"body":null,"error":e});
        }
    }
}

module.exports = UserController;