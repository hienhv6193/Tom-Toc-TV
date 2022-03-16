const express=require('express');
const app=express();
const body=require('body-parser');
const cors=require('cors');

const admin = require("firebase-admin");
var serviceAccount = require("./keys/key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const firestore = admin.firestore();
app.use(body.urlencoded({ extended: false }));
// const Database=require('./database');
// const db= new Database();
app.use(body.json());
app.use(cors());

app.get('/Users',async (req,res)=>{
        let result=await db.addItem();
        res.send(result)
})

//API chỉnh sửa thông tin người dùng theo UserID
// app.get("/editUserInfo", async function (request, response) {
// let body=request.body
//   let userId = body.userID;
//   try{
//   let querySnapshot = firestore.collectio("UserInfo")
//   // .where('UserId', '==', 'PhEOYWGGS7rhWWsRaB61').get()
//   .where('UserId', '==', userId).get()
//   .then(res => {
//     console.log(res);
//     res.forEach(element => {
//       // console.log(element.data());
//        element.ref.update(body.data);
//     });
//   });
//   response.send(querySnapshot);
// }catch(err)
// {
//       res.send(err.toString());
// }
// let result=await db.addItem();
// res.send(result)

// });

// API tạo người dùng. Không tạo mới nếu người dùng tồn tại trong hệ thống
// app.post("/createUser", async (req, res) => {
//   let body = req.body;
//   let checkUser=false;
//   try{
//   let findUser = await firestore.collection("Users").get()
//   findUser.forEach(doc => {
//     // console.log(doc.data())
//     if(doc.id == body.docUser ){
//       return checkUser=true;
//     }
//   });
//   // console.log(checkUser)
//   if(!checkUser){
//   let result = await firestore.collection("Users").add(body.data);
//   let temp= result.data();
//   res.send({
//     message: "thêm người dùng mới",
//     temp
//   });
//   }else{
//     res.send({
//       message: "người dùng đã tồn tại",
//     });
//   }
// }catch(err){
//     res.send(err.toString());
// }
// });

// API lấy ra danh sách streamer mà người dùng theo dõi
// app.get("/getStreamer", async function (req, res) {
//   try{
//   let body = req.body;
//   let listStreamer;
//   let streamerFollow = await firestore.collection("UserInfo").doc(body.docID).get().then(doc => {
//     listStreamer=doc.data().Subcribe;
//     });
//   res.send(listStreamer);
//   }catch(err){
//     res.send(err.toString());
//   }
// });

// API tạo stream. Sau khi tạo cập nhật biến IsStreaming=true của người dùng có Id trùng với hostID
// app.post("/createStream", async (req, res) => {
//   try{
//   let body = req.body;
//   let temp=await firestore.collection("Streams").add(body.data);
//   let string=temp.id;
//   let checkUser= await firestore.collection("Streams").doc(string).get();
//   let StreamID=checkUser.data().HostID;
//   let findUser = await firestore.collection("Users").doc(StreamID)
//   .update({"isStreaming":true})
//   res.send("tạo stream thành công");
// }catch(error){
//     res.send(error.toString());}
// });

// API tắt stream. Xóa document , cập nhật biên IsStreaming=false của người dùng có Id trùng với hostID
// app.delete("/deleteStream", async (req, res) => {
//   try{
//   let body = req.body;
//   let checkUser= await firestore.collection("Streams").doc(body.docId).get();
//   let StreamID=checkUser.data().HostID;
//   await firestore.collection("Streams").doc(body.docId).delete();
//   let findUser = await firestore.collection("Users").doc(StreamID)
//   .update({"isStreaming":false})
//   // console.log(checkUser)
//   res.send("xóa stream thành công");
// }catch(error){
//     res.send(error.toString());}
// });

// API Subcribe.
// app.put("/createSubcribe", async (req, res) => {
//   try{
//     let body = req.body;
//     await firestore.collection("UserInfo")
//     .where('UserId', '==', body.userIdStream).get()
//     .then(value => {
//        value.forEach(element => {
//          element.data().Subcriber.forEach( async data=>{
//            if(data!=body.userIdSubcriber){
//                 await firestore.collection("UserInfo").doc(element.id).update({
//                   Subcriber: admin.firestore.FieldValue.arrayUnion(body.userIdSubcriber)})
//               res.send({message:"theo dõi thành công"});
//             }else{
//               res.send({message:"đã theo dõi"});
//             }
//            }) 
//        })
//       });
  
//     await firestore.collection("UserInfo")
//     .where('UserId', '==', body.userIdSubcriber).get()
//     .then(value => {
//        value.forEach(element => {
//          element.data().Subcribe.forEach( async data=>{
//            if(data!=body.userIdStream){
//                 await firestore.collection("UserInfo").doc(element.id).update({
//                   Subcribe: admin.firestore.FieldValue.arrayUnion(body.userIdStream)})
//             }
//            })   
//        })
//       });
// }catch(error){
//     res.send(error.toString());}
// });

// API UnSubcribe
// app.delete("/deleteSubcribe", async (req, res) => {
//   try{
//   let body = req.body;
//   await firestore.collection("UserInfo")
//   .where('UserId', '==', body.userIdStream).get()
//   .then(value => {
//      value.forEach(element => {
//        element.data().Subcriber.forEach( async data=>{
//          if(data==body.userIdSubcriber){
//               await firestore.collection("UserInfo").doc(element.id).update({
//                 Subcriber: admin.firestore.FieldValue.arrayRemove(body.userIdSubcriber)})
//                 res.send({message:"hủy theo dõi thành công"});
//               }else{
//                   res.send({message:"chưa theo dõi"});
//               }
//          })   
//      })
//     });

//     await firestore.collection("UserInfo")
//     .where('UserId', '==', body.userIdSubcriber).get()
//     .then(value => {
//        value.forEach(element => {
//          element.data().Subcribe.forEach( async data=>{
//            if(data==body.userIdStream){
//                 await firestore.collection("UserInfo").doc(element.id).update({
//                   Subcribe: admin.firestore.FieldValue.arrayRemove(body.userIdStream)})
//             }
//            })   
//        })
//       });

// }catch(error){
//     res.send(error.toString());}
// });

// API like
// app.put("/like", async (req, res) => {
//   try{
//     let body=req.body
//     await firestore.collection("Streams")
//       .where('HostID', '==', body.HostIdStream).get()
//       .then(value => {
//          value.forEach(element => {
//            element.data().DisLikes.forEach(async data=>{
//              if(data==body.userIdDisLike){
//                   await firestore.collection("Streams").doc(element.id).update({
//                     DisLikes: admin.firestore.FieldValue.arrayRemove(body.userIdDisLike)})
//                   await firestore.collection("Streams").doc(element.id).update({
//                     Likes: admin.firestore.FieldValue.arrayUnion(body.userIdDisLike)})
                  // res.send({message:"like"});
//                   }
              // else{
              //     res.send({message:"đã like"});
              // }
//              })   
//          })
//         });
// }catch(error){
//     res.send(error.toString());}
// });

//API dislike
// app.put("/dislike", async (req, res) => {
//   try{
//     let body=req.body
//     await firestore.collection("Streams")
//       .where('HostID', '==', body.HostIdStream).get()
//       .then(value => {
//          value.forEach(element => {
//            element.data().Likes.forEach(async data=>{
//              if(data==body.userIdDisLike){
//                   await firestore.collection("Streams").doc(element.id).update({
//                     Likes: admin.firestore.FieldValue.arrayRemove(body.userIdDisLike)})
//                   await firestore.collection("Streams").doc(element.id).update({
//                     DisLikes: admin.firestore.FieldValue.arrayUnion(body.userIdDisLike)})
//                   // res.send({message:"dislike"});
//                   }
//               // else{
//               //     res.send({message:"đã dislike"});
//               // }
//              })   
//          })
//         });
// }catch(error){
//     res.send(error.toString());}
// });

// API thêm danh mục
app.post("/addElementCategorie", async (req, res) => {
  try{
    let body=req.body
    await firestore.collection("Categories").doc(body.docId).update(body.data);
    res.send({message:"thêm thành công"}); 
}catch(error){
    res.send(error.toString());}
});

//API thêm thành phần trong danh mục
app.listen(3000,"0.0.0.0",()=>{
    console.log("Server is running on http://127.0.0.1:3000/")
});