import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

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
    role: ""
  }

  userArray:any[]=[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http.get('https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllUsers').subscribe((res: any) => {
        this.userArray = res.data;
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
