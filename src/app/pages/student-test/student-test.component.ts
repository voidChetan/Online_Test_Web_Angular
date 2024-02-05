import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.css'],
})
export class StudentTestComponent implements OnInit {
  testArray: any[] = [];
  isViewResult:boolean=false;
  resultArray:any[]=[];
   trueCount:number = 0;
 falseCount:number = 0;
 passingScore:number=100;
  localObj:any;
  parseObj:any;
  constructor(private http: HttpClient, private route: Router) {
    this.localObj=localStorage.getItem('LoggedUserData');
    if(this.localObj!==null && this.localObj!==undefined){
      this.parseObj=JSON.parse(this.localObj);
    }else{
      console.log("Not Found Data");
    }
  }

  ngOnInit(): void {
    this.getAllTest();
  }

  getAllTest() {
    this.http
      .get('https://freeapi.gerasim.in/api/OnlineTest/GetAllAssignedTestByUserId?userId='+this.parseObj.userId)
      .subscribe((res: any) => {
        this.testArray = res.data;
      });
  }

  startTest(assignid: number,testId:number) {

    const aid= assignid;
    const tid=testId

    this.route.navigate(['/start-test', aid,tid]);
  }

  viewResult(id:number){
    this.isViewResult=true
    this.http.get("https://freeapi.gerasim.in/api/OnlineTest/GetTestResultByAssignedTestId?AssignedTestId="+id).subscribe((res:any)=>{
     this.resultArray=res.data;
     this.count();
    })
  }

  count(){
    this.resultArray.forEach(item => {
      if (item.isCorrect === true) {
        this.trueCount++;
      } else {
        this.falseCount++;
      }
    });
  }

  home(){
    this.isViewResult=false;
  }
}
