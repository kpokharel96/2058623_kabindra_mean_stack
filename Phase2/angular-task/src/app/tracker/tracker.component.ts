import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  // todoRef = new FormGroup({
  //   user: new FormControl("",[Validators.required]),
  //   pass: new FormControl("",[Validators.required])
  // })
  task:any="";
  resultArray:any[]=[]
  flag:boolean=false;
  

  constructor() { }

  ngOnInit(): void {
  }

  addTask(taskForm:NgForm){
    this.flag=true;
    this.task = taskForm.value
    this.resultArray.push(this.task)
    console.log(this.task)
  }
  
  


  

}
