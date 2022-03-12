
var admin = require("firebase-admin");

var serviceAccount = require("./Keys/key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore=admin.firestore();
class Database{
    constructor(){

    }
    async addItem(){
        return 'add thành công'
    }
    async getItem(){
        let temp=[];
        (await firestore.collection("Users").get()).docs.map((data)=>{
          temp.push(data.data())
        })
        return temp
    }
    
    async getItemid(){
      let temp;
      (await firestore.collection("UserInfo")
      .get())
      .docs.map((data)=>{
        temp = data.data();
      })
      return temp;
  }
}
module.exports=Database;