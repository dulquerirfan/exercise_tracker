const express=require('express');
const app= express();
const env=require('dotenv').config();
const port=process.env.PORT;
const DB=process.env.DB;
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const user=require('./api/user');
const cors=require('cors');
const exercise=require('./api/exercise');
//body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
//database connection
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(()=>{
    console.log('database connected successfully');
})
.catch((err)=>{
    console.log(err);
})
//routes
app.use('/',user);
app.use('/api',exercise);
app.listen(port,()=>{
    console.log('server is up and running');
})
