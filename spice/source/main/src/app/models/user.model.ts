export class User {
    userID: number;
    fullName: string;
    username: string;
    userStatus: boolean;
    password:string='';
  
    constructor(userID: number, fullName: string, username: string, userStatus: boolean) {
      this.userID = userID;
      this.fullName = fullName;
      this.username = username;
      this.userStatus = userStatus;
    }
  }
  