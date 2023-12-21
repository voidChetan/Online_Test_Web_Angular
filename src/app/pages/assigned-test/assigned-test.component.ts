



import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

import { AssignedTestService } from 'src/app/core/services/user/assigned-test.service';

@Component({
  selector: 'app-assigned-test',
  templateUrl: './assigned-test.component.html',
  styleUrls: ['./assigned-test.component.css'],
})
export class AssignedTestComponent {
  isEdit: boolean = false;
  testId: number = 0;
  registrationCode: number = 0;
  isSidePannelOpen: boolean = true;
  isLoader: boolean = false;
  isAPICallInProgress: boolean = false;
  assignTestList: any[] = [];
  localData: any;
  TestArray: any[] = [];

  userArray: any[] = [];
  assignTestObj: any = {
    registrationCode: '',
    testId: 0,
  };
  constructor(
    private http: HttpClient,
    private assignSrv: AssignedTestService,
    private msgSrv: MessageService
  ) {
    this.getAllAssignedTest();
    this.getAllTest();
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
    this.http
      .get('https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllUsers')
      .subscribe((res: any) => {
        this.userArray = res.data;
      });
  }
  getAllAssignedTest() {
    this.assignSrv.getAllAssignedTest().subscribe((res: any) => {
      this.assignTestList = res.data;
    });
  }
  bulkAssignTestData() {
    const obj = {
      registrationCode: '',
      testId: 0,
      isEdit: true,
    };
    this.assignTestList.unshift(obj);
  }
  assignTest() {
    if (this.isAPICallInProgress == false) {
      this.isAPICallInProgress = true;
      this.assignSrv.assignedTest(this.assignTestObj).subscribe(
        (res: any) => {
          if (res.result) {
            this.msgSrv.add({
              severity: 'success',
              summary: 'Successfully',
              detail: res.message,
            });

            //  alert(res.message);
            this.getAllTest();
          } else {
            this.msgSrv.add({
              severity: 'error',
              summary: 'Error',
              detail: res.message,
            });

            // alert(res.message);
          }
          this.isAPICallInProgress == false;
        },
        (error) => {
          alert('API Error');
        }
      );
    }
  }
  onSave() {
    this.assignSrv.bulkUpdateTest(this.assignTestList).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
        this.getAllTest();
      } else {
        alert(res.message);
      }
    });
  }

  onEdit(test: any) {
    // this.assignSrv.getAllAssignedTestByRegCode(this.assignTestObj.registrationCode).subscribe((res:any)=>{
    //   this.assignTestObj = res.data;
    // })
    test.isEdit = true;
  }
  onDelete(id: number) {
    const isConfirm = confirm('Are You Sure Want to Delete ?');
    if (isConfirm) {
      this.assignSrv.deleteAssignedTestBytestId(id).subscribe((res: any) => {
        if (res.result) {
          alert(res.message);
          this.getAllTest();
        } else {
          alert(res.message);
        }
      });
    }
  }
  onReset() {
    this.assignTestObj = {
      registrationCode: '',
      testId: 0,
    };
  }
}
