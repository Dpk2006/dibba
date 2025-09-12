import e from "express";
import 'dotenv/config';

const app = e();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send(true);
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})