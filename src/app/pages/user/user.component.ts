import { SearchService } from './../../core/services/search/search.service';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { __param } from 'tslib';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent  implements OnInit {

 

   userArray: any[] = [];
   
   isEdit: boolean = false;
   userObj: any = {
     userId: 0,
     emailid: '',
     mobileNo: '',
     password: '',
     fullName: '',
     gender: '',
     registrationCode: '',
     collegeName: '',
     stream: '',
     role: '',
   };
   filterUserArray: any[] = [];
   

  constructor(private http: HttpClient,private searchSrv: SearchService,private msgSrv: MessageService) {
    this.searchSrv.searchText.subscribe((res: any) => {
      this.filterUserArray = this.searchSrv.getFilteredData(this.userArray,res);
    });
  }
  
  ngOnInit(): void {
    this.getAllUsers();
    
    
  }


 
 

  getAllUsers() {
    this.http
      .get('https://freeapi.gerasim.in/api/OnlineTest/GetAllUsers')
      .subscribe((res: any) => {
        this.userArray = res.data;
        this.filterUserArray = res.data;
      
  
      });
  }
  bulkData() {
    const obj = {
      userId: 0,
      emailid: '',
      mobileNo: '',
      password: '',
      fullName: '',
      gender: '',
      registrationCode: '',
      collegeName: '',
      stream: '',
      role: '',
      isEdit: true,
    };
    this.userArray.unshift(obj);
  }
  save() {
    this.http
      .post(
        'https://freeapi.gerasim.in/api/OnlineTest/AddUpdateBulkUsers',
        this.userArray
      )
      .subscribe((res: any) => {
        if (res.result) {
          this.msgSrv.add({
            severity: 'success',
            summary: 'Successfully',
            detail: res.message,
          });
          // alert(res.message);
          this.getAllUsers();
        } else {
          alert(res.message);
        }
      });
  }

  edit(user: any) {
    user.isEdit = true;
  }

  update() {}

  delete(id: number) {
    const isConfirm = confirm('Are You Sure Want to Delete ?');
    if (isConfirm) {
      this.http
        .get(
          'https://freeapi.gerasim.in/api/OnlineTest/DeleteUserById?id=' +
            id
        )
        .subscribe((res: any) => {
          if (res.result) {
            alert(res.message);
            this.getAllUsers();
          } else {
            alert(res.message);
          }
        });
    }
  }
}

