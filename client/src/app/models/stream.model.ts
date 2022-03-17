export class Stream{
  constructor(){
    Name: String;
    CategoryId: String;
    HostId: String;
    Likes: [];
    DisLikes: [];
    Messages: [{ UserId: String, Mess: String }];
    StreamKey: String;
    Description: String;
  }
}

