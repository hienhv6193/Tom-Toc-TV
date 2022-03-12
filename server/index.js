const express=require('express');
const app=express();
const body=require('body-parser');
const cors=require('cors');
const Database=require('./database');

const db= new Database();

app.use(body.json());
app.use(cors());


app.listen(3000,()=>{
    console.log('server đang chạy');
})
app.get('/Users',async (req,res)=>{
        let result=await db.getItem();
        res.send(result)
})