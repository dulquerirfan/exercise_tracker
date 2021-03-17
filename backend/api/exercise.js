const express=require('express');
const router=express.Router();
const exercise=require('../models/exercise');

//4 routes
//show all the users in database
router.get('/',(req,res)=>{
    exercise.find()
    .then((exercises)=>{
       return res.json(exercises);
    })
    .catch(err=>{
        console.log(err);
    })
})
//add exercise
router.post('/addexercise',(req,res)=>{
    const username=req.body.username;
    const description=req.body.description;
    const duration=req.body.duration;
    const newExercise=new exercise({
        username,
        description,
        duration
    });
    newExercise.save()
    .then((exercise)=>{
        res.json(exercise);
    })
    .catch(err=>{
        res.status(400).json(err);
    })
})
//particular id
router.get('/:id',(req,res)=>{
    exercise.findById(req.params.id)
    .then((person)=>{
           return res.json(person);
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
})
//update exercise
router.post("/update/:id",(req,res)=>{
    exercise.findById(req.params.id)
    .then((exercise)=>{
      exercise.username=req.body.username;
      exercise.decription=req.body.description;
      exercise.duration=req.body.duration;
      exercise.save()
      .then(()=>{
          return res.json("successfully updated !");
      })
      .catch(err=>{
          res.status(400).json(err);
      })
       
    })
    .catch(err=>{
        res.status(400).json(err)
    })
}) 

//delete exercise
router.delete('/delete /:id',(req,res)=>{
    exercise.findByIdAndDelete(req.params.id)
    .then(()=>{
        return res.json("successfully deleted");
    })
    .catch((err)=>{
        res.status(400).json(err);
    })
})
module.exports=router;