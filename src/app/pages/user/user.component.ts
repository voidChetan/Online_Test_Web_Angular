import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[MessageService]
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

  userArray:any[]=[];
  constructor(private http: HttpClient,private msgSrv:MessageService) {}

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
      isEdit:true
    };
    this.userArray.unshift(obj);
  }
  save() {
    this.http.post('https://freeapi.miniprojectideas.com/api/OnlineTest/AddUpdateBulkUsers',this.userArray).subscribe((res: any) => {
        if (res.result) {
        this.msgSrv.add({ severity: 'success', summary: 'Successfully', detail: res.message });
          // alert(res.message);
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
