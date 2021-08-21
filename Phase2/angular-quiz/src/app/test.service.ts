import { Injectable, OnInit } from '@angular/core';
import { TestModel } from './testModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService implements OnInit {

  testData: TestModel[] = [];
  testResult: any[] = [];
  testSubmitted: boolean = false;
  isSelect: boolean = false;
  score: number = 0;
  status: string = "";
  pass: boolean = false;

  constructor(public http: HttpClient) { }

  ngOnInit() {

  }

  loadData() {
    this.http.get<TestModel[]>("/assets/questions.json").subscribe(data => this.testData = data,
      error => console.log(error), () => console.log("completed"))
  }

  getTestData() {
    return this.testData;
  }

  checkEach(question: string, answer: string) {
    for (let data of this.testData) {
      if (data.question == question && data.correct == answer) {
        this.isSelect = true;
        return true;
      }
    }
    return false;
  }
  checkAnswer(answers: any[]) {

    for (let i = 0; i < answers.length; i++) {
      let result = this.checkEach(answers[i].question, answers[i].ans);
      this.testResult.push({ "question": answers[i].question, "ans": answers[i].ans, "result": result });
    }
    this.testSubmitted = true;
    this.coutScore();
    this.setStatus();
  }
  getTestSubmitted() {
    return this.testSubmitted;
  }

  getTestResult() {
    return this.testResult;
  }

  checkOption(question: string, ans: string) {
    for (let data of this.testResult) {
      if (data.ans == ans && data.question == question && !data.result) {
        return true;
      }
    }

    return false;
  }

  isRightAnswer(question: string, ans: string) {

    for (let data of this.testData) {
      if (data.correct == ans && data.question == question) {
        return true;
      }
    }

    return false;

  }
  getIsSelect() {
    return this.isSelect;
  }

  coutScore() {
    for (let i = 0; i < this.testResult.length; i++) {
      if (this.testResult[i].result == true) {
        this.score += 1;
      }
    }
  }

  getScore() {
    return this.score;
  }

  totalQuestion() {
    return this.testData.length;
  }

  setStatus() {
    console.log('Score is ' + this.score);
    if (this.score > this.testResult.length / 2) {
      this.status = "Pass";
      this.pass = true;
    } else {
      this.status = "Fail";
    }
  }
  getStatus() {
    return this.status;
  }

  getPass() {
    return this.pass;
  }

}
