import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../user.model';
import { UserServiceService } from '../user.service';

@Component({
  selector: 'app-real',
  templateUrl: './real.component.html',
  styleUrls: ['./real.component.css']
})
export class RealComponent implements OnInit {
  signupRef = new FormGroup({
    firstName: new FormControl("",[Validators.required]),
    lastName: new FormControl("",[Validators.required]),
    userName: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required])
  
  }) 
  name:string = "";
  contacts:any = [];
  flag:boolean = false;
  check:boolean=false;
  flag1:boolean=true;
  flag2:boolean=false;
  flag3:boolean=false;
  user:any=[]

  msg1:string=""

  portfolio = new FormGroup({
    contact: new FormControl(),
    phone: new FormControl()
  })
 

  constructor(public userService:UserServiceService) { }

  ngOnInit(): void {
  }

  registerUser(){
    
    let user = this.signupRef.value;
    //console.log(this.user.userName)
    //let user1 = this.userService.users;
    this.userService.registerService(user);
    this.flag2=false;
    this.flag=false;
    this.flag1=true;
  
  }
  getUsers(){
    let users:User =  this.userService.getUser();
    console.log(users);
  }
 

  loginRef = new FormGroup({
    user: new FormControl("",[Validators.required]),
    pass: new FormControl("",[Validators.required])
  })

  checkUser(){
    this.flag=false;
    this.flag1=false;
    this.flag2=true;
    
    let login = this.loginRef.value;
    console.log(login)
    let loginTrue=this.userService.checkUsers(login)
    console.log(loginTrue)

    //console.log(this.loginRef.value)
    if(loginTrue==true){
      this.flag2=true;
      this.name=this.userService.users.userName

    }else{
      this.flag1=true
      this.flag2=false
      this.msg1="Invalid Data"
    }
    
  }

  onSave(){
    this.flag3 = true;
    this.flag2=true;
    let contactInfo = this.portfolio.value;
    this.contacts.push(contactInfo);
  
  } 

  checkSomthing(){
    this.check=true;
  }

  switchtoSignUp(){
    this.flag=true
    this.flag1=false;
    this.flag2=false
    this.flag3=false;
  }

  reLogin(){
    this.flag1=true;
    this.flag=false;
  }

  rePort(){
    this.flag1=false;
    this.flag=true;
    this.flag2=false;
  }
}
