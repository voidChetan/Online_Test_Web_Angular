import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AssignedTestService } from 'src/app/core/services/user/assigned-test.service';

@Component({
  selector: 'app-assigned-test',
  templateUrl: './assigned-test.component.html',
  styleUrls: ['./assigned-test.component.css']
})
export class AssignedTestComponent {
  testId:number=0;
  registrationCode:number=0;
  isSidePannelOpen: boolean = true;
  isLoader:boolean=false;
  isAPICallInProgress : boolean = false;
  assignTestList: any[] = [];
  localData: any;
  TestArray:any[]=[];
  userArray:any[]=[];
  assignTestObj:any={

      "registrationCode": "",
      "testId": 0

  }
  constructor(private http:HttpClient,private assignSrv:AssignedTestService){
   this. getAllAssignedTest()
    this. getAllTest();
    this.getAllUsers();
  }


  getAllTest() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllTest')
      .subscribe((res: any) => {
        this.TestArray = res.data;
      });
  }
  getAllUsers() {
    this.http.get('https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllUsers').subscribe((res: any) => {
        this.userArray = res.data;
      });
  }
  getAllAssignedTest(){
    this.assignSrv.getAllAssignedTest().subscribe((res:any)=>{
      this.assignTestList=res.data;
    })
  }
  onEdit(id:number){
    this.assignSrv.getAllAssignedTestByRegCode(this.assignTestObj.registrationCode).subscribe((res:any)=>{
      this.assignTestObj = res.data;
    })
  }
  onDelete(id:number){}
  onReset(){
    this.assignTestObj={
      "registrationCode": "",
      "testId": 0
    };
  }
}
