import { Injectable } from '@angular/core';

interface userData {
  userName:string,
  email:string,
  phoneNo:string
}

@Injectable({
  providedIn: "root"
})
export class UserService {

  userList: any[]= [];


  constructor() { }

  addUser(user:userData){
   this.userList.push(user);
  }

  getUserList(){
    return this.userList;
  }
  
}
