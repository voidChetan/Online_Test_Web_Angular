import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.css']
})
export class StudentTestComponent implements OnInit {

  testArray:any[]=[];
  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.getAllTest();
  }

  getAllTest(){
    this.http.get("https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllTest").subscribe((res:any)=>{
    this.testArray=res.data;
    })
  }

}
