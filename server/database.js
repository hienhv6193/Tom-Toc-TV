var admin = require("firebase-admin");
var serviceAccount = require("./Keys/key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();
class Database {
  constructor() {}
  ////STREAM FUNCTION

  /// Tạo stream
  async createStream(data) {
    return new Promise(async(resolve, reject)  => {
      let temp = await(await firestore.collection("Streams").add(data)).get();
      // let string = temp.id;
      let checkUser = temp.data();
      let StreamID = checkUser.HostId;
      // console.log(StreamID)
      // await firestore
      //   .collection("Users")
      //   .doc(StreamID)
      //   .update({ isStreaming: true });
      resolve(temp.id);
    });
  }
  //Xóa stream
  async endStream(bodydata) {
    try {
      let string;
      await firestore
        .collection("Streams")
        .doc(bodydata.streamId)
        .get()
        .then((data) => {
          string = data.data().HostId;
        });
      await firestore.collection("Streams").doc(bodydata.streamId).delete();
      await firestore
        .collection("Users")
        .doc(string)
        .update({ isStreaming: false });
    } catch (err) {}
  }

  async addChat(data) {
    try {
      await firestore
        .collection("Streams")
        .doc(data.streamId)
        .update({
          Messages: admin.firestore.FieldValue.arrayUnion({
            UserId: data.UserId,
            mess: data.message,
          }),
        });
    } catch (err) {
      console.log(err);
    }
  }
  ////END STREAM FUNCTION
}
module.exports = Database;
