
var admin = require("firebase-admin");
var serviceAccount = require("./Keys/key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();
class Database {
  constructor() {

  }
  ////STREAM FUNCTION

  // api lấy  thông tin cá nhân của người dùng
  async getItemid(){
    let temp;
    (await firestore.collection("UserInfo")
    .get())
    .docs.map((data)=>{
      temp = data.data();
    })
    return temp;
  }
  //// category
  async getCategory(){
    let temp=[];
    (await firestore.collection("Categories").get()
    ).docs.map((data) => {
      temp.push(data.data().categoryName);
    })
    console.log(temp)
    return temp;
  }
  /// Tạo stream
  async createStream(data) {
    let temp;
    try {
     temp = await firestore.collection("Streams").add(data).then((data)=>{
       return data.id;
     });
  
      let string = temp.id;
      let checkUser = await firestore.collection("Streams").doc(string).get();
      let StreamID = checkUser.data().HostId;
      await firestore.collection("Users").doc(StreamID).update({ "isStreaming": true });
      return temp;
     
    } catch (err) {

    }
   
  }
  //Xóa stream
  async endStream(bodydata) {
    try {
      let string;
      await firestore.collection("Streams").doc(bodydata.streamId).get().then((data) => {
        string = data.data().HostId;
      })
      await firestore.collection("Streams").doc(bodydata.streamId).delete();
      await firestore.collection("Users").doc(string).update({ "isStreaming": false });
    } catch (err) {
    }
  }

  async addChat(data) {
    try {
      await firestore.collection("Streams").doc(data.streamId).update({
        Messages: admin.firestore.FieldValue.arrayUnion({ UserId: data.UserId, mess: data.message })
      })
    } catch (err) {
      console.log(err);
    }
  }
  ////END STREAM FUNCTION
}
module.exports = Database;