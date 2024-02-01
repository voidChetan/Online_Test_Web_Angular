import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.css'],
})
export class StartTestComponent implements OnInit {
  count: number = 0;
  currentId: number = 0;
  assignedId:number=0;
  optionArray: any[] = [];
  questionArray: any[] = [];
  remainingTime: number = 10;
  retrievedData: any;
  selectedId:number=0
  submitTestObj: any = {
    assignedTestId: 0,
    userId: 0,
    testId: 0,
    quizTestAnswerViews: [],
  };
  quizTestAnswerViews: any = {
    questionId: 0,
    selectedOptionId: 0,
  };

  sumbitQuestions:any[]=[];
  constructor(private activatedRouter: ActivatedRoute,private http: HttpClient,private route: Router) {
    const timer = interval(1000);
    timer.subscribe((res) => {
      if (this.remainingTime != 0) {
        this.remainingTime--;
      }
    });
    this.activatedRouter.params.subscribe((res: any) => {
      console.log(res)
      if (res.aid && res.tid) {

        this.currentId = res.tid;
        this.assignedId=res.aid

        this.http.get('https://freeapi.gerasim.in/api/OnlineTest/GetAllQuestionsByAssignTestId?assignedTestId='+this.currentId).subscribe((res: any) => {
          this.questionArray = res.data;
          });
      }
    });
  }

  ngOnInit(): void {
    let storedData = localStorage.getItem('LoggedUserData');

    // Parse the JSON data
    if (storedData) {
      this.retrievedData = JSON.parse(storedData);
    } else {
      this.retrievedData = 'No data found in local storage.';
    }

    document.addEventListener('visibilitychange', () => {
      //let count =0
      if (document.visibilityState === 'visible') {
        console.log('tab is active');
      } else {
        console.log('tab is inactive');
        // alert('not allow to change screen');
        console.log('tab is inactive', this.count++);
      }
    });
  }

  submit() {
    this.submitTestObj.userId = this.retrievedData.userId;
    this.submitTestObj.testId = this.currentId;


    this.http.post('https://freeapi.gerasim.in/api/OnlineTest/SubmitTest',this.submitTestObj).subscribe((res: any) => {
        if (res.result) {
          alert(res.message);
          console.log(this.submitTestObj);
          this.route.navigateByUrl('student-Test');
        } else {
          alert(res.message);
        }
      });
  }

  changeOption(queId:number,optId:number){

    const obj={
      optionId : optId,
      quetionId:  queId
    }


    this.quizTestAnswerViews.questionId=obj.quetionId;

   this.quizTestAnswerViews.selectedOptionId=obj.quetionId;

    this.submitTestObj.quizTestAnswerViews.push(obj)


  }
}
