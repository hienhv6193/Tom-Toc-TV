const express=require('express');
const app=express();
const body=require('body-parser');
const cors=require('cors');
const Database=require('./database');

const db= new Database();

app.use(body.json());
app.use(cors());

app.get('/Users',async (req,res)=>{
        let result=await db.getItem();
        res.send(result)
})

// api lấy  thông tin cá nhân của người dùng
app.get('/api/:id', async function (request, response) {
    let docId = request.params.docId;
    try{
        let result = await db.getItemid();
        response.send(result);
    }catch (error) {
        response.send({
          error: error.toString(),
        });
    }
});

app.listen(3000,()=>{
    console.log('server đang chạy');
})