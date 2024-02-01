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

  startTest(id: number) {
    this.route.navigate(['/start-test', id]);
  }
}
