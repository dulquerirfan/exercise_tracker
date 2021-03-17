const express=require('express');
const router=express.Router();
const user=require('../models/user');
//show all the users in the databse
router.get('/users',(req,res)=>{
    user.find()
        .then((user) =>{
    
              return res.json(user);
            
        })
        .catch(err=>{
            console.log(err);
            res.status(400).json(err);
        })
})

//add a new user
router.post('/addUser',(req,res)=>{
    const username=req.body.username;
    const newUser=new user({username});
    newUser.save()
    .then((user)=>{
        res.json(user);
    })
    .catch((err)=>{
        res.status(400).json(err);
    })
})
module.exports=router;

