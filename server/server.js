import e from "express";
import 'dotenv/config';

import { connectMongo } from "./db/connectMongo.js";

const app = e();
const PORT = process.env.PORT || 3000;

connectMongo();

app.get("/",(req,res)=>{
    res.send(true);
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})