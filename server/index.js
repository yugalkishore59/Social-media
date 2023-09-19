import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv"; // to use environment variables

import postRoutes from './routes/post.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended: true }));
app.use(cors());
//this means that every route in posts will be reached from localhost:3002/posts
//and this should always be below app.use(cors());
app.use('/posts', postRoutes)

const PORT = process.env.port || 3002;

mongoose.connect(process.env.MONGODB_URL,{useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=>console.log(`running on port ${PORT}`)))
.catch((e)=> console.log("Oh shit! " + e));
