import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
 })
 export class UserServiceService {
  users:User = {
    firstName: "",
    lastName: "",
    userName: "",
    password: ""
  };
  constructor() { }
  
  registerService(user:any){
    console.log(user);
    this.users = user;
  }
  
  getUser(){
    return this.users;
  }

  checkUsers(user:any){
    if(user.user === this.users.userName && user.pass===this.users.password){
      return true;
    }else{
      return false
    }
  }
 }
  