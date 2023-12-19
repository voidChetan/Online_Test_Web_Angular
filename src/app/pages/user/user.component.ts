import { SearchService } from './../../core/services/search/search.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { __param } from 'tslib';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  isEdit:boolean=false;
  userObj:any={
    userId: 0,
    emailid: "",
    mobileNo: "",
    password: "",
    fullName: "",
    gender: "",
    registrationCode: "",
    collegeName: "",
    stream: "",
    role: "",


  }
  filterUserArray:any[]=[];

  userArray:any[]=[];

  constructor(private http: HttpClient,private searchSrv:SearchService) {
    // this.searchSrv.searchText.subscribe((res:any)=>{
    //   debugger;
    //   this.filterUserArray=this.userArray.filter((param:any)=>{
    //     let serach = res;
    //     let values = Object.values(param);
    //     let flag = false;
    //     values.forEach((val:any)=>{
    //       if(val.toString().toLowerCase().indexOf(serach) > -1){
    //         flag = true;
    //         return;
    //       }

    //     });
    //     if(flag){
    //       return param;
    //     }
    //   });
    // })

    this.searchSrv.searchText.subscribe((res:any)=>{
    debugger;
      this.filterUserArray = this.userArray.filter((param: any) => {
        let search = res;
        let value = Object.values(param)
        let flag = false;
        value.forEach((val: any) => {
          if (val !== null && val !== undefined && val.toString().toLowerCase().indexOf(search) > -1) {
            flag = true;
            return;
          }
        });
        if (flag) {
          return param;
        }
      });
    })
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http.get('https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllUsers').subscribe((res: any) => {
        this.userArray = res.data;
        this.filterUserArray=res.data;
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
      isEdit:true
    };
    this.userArray.unshift(obj);
  }
  save() {
    this.http.post('https://freeapi.miniprojectideas.com/api/OnlineTest/AddUpdateBulkUsers',this.userArray).subscribe((res: any) => {
        if (res.result) {
          alert(res.message);
          this.getAllUsers();
        } else {
          alert(res.message);
        }
      });
  }

  edit(user:any){
    user.isEdit=true;

  }

  update(){}

  delete(id: number) {
    const isConfirm = confirm('Are You Sure Want to Delete ?');
    if (isConfirm) {
      this.http.get('https://freeapi.miniprojectideas.com/api/OnlineTest/DeleteUserById?id='+id).subscribe((res: any) => {
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
