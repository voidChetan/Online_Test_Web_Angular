import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.css']
})
export class StartTestComponent implements OnInit {

  currentId:number=0;
  optionArray:any[]=[];
  questionArray:any[]=[];
    remainingTime:number=10;
    retrievedData:any
    submitTestObj:any={
      
        assignedTestId: 0,
        userId: 0,
        testId: 0,
        quizTestAnswerViews: []
    }
    quizTestAnswerViewsObj:any={
        questionId: 0,
        selectedOptionId: 0
    }
  constructor(private activatedRouter:ActivatedRoute,private http:HttpClient,private route :Router){

    const timer= interval(1000);
    timer.subscribe( res => {
      if(this.remainingTime != 0){
        this.remainingTime --;
      }
     
    })
    this.activatedRouter.params.subscribe((res:any)=>{
      if(res.id){
        
        this.currentId=res.id;

        this.http.get("https://freeapi.miniprojectideas.com/api/OnlineTest/getAllQuestionByTestId?testId="+this.currentId).subscribe((res:any)=>{
          this.questionArray=res.data;
          
        })
      }
    })

   
  }

  ngOnInit(): void {
    let storedData = localStorage.getItem('LoggedUserData');

    // Parse the JSON data
    if (storedData) {
      this.retrievedData = JSON.parse(storedData);
    } else {
      this.retrievedData = 'No data found in local storage.';
    }
      
  }
  

 submit(){
 
  this.submitTestObj.userId=this.retrievedData.userId;
  this.submitTestObj.testId=this.currentId;
  
  
  this.http.post("https://freeapi.miniprojectideas.com/api/OnlineTest/SubmitTest",this.submitTestObj).subscribe((res:any)=>{
    if(res.result){
      alert(res.message);
      this.route.navigateByUrl("student-Test")

    }else{
      alert(res.message);
    }
  })
 }
}
