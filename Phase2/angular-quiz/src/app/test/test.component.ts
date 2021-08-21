import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestService } from '../test.service';
import { TestModel } from '../testModel';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testData: TestModel[] = [];

  constructor(public testService: TestService) { }

  ngOnInit(): void {
  }

  checkAnswer(testForm: NgForm) {
    let testData = testForm.value;
    let answers: any[] = [];
    for (let data in testData) {
      answers.push({ "question": data, "ans": testForm.controls[data].value });
    }
    this.testService.checkAnswer(answers);
  }

}
