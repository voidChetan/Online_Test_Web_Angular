import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showRegister: any;
  visible: boolean = false;
  isFormSubmited: boolean = false;
  changetype: any;
  isApiCallInProgress: boolean = false;
  loginObj: any = {
    emailid: '',
    password: '',
  };
  usersObj: any = {
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

  constructor(
    private http: HttpClient,
    private router: Router,
    private userSrv: UserService
  ) {}

  onLogin() {
    if (this.isApiCallInProgress == false) {
      this.isApiCallInProgress = true;
      this.http.post('https://freeapi.miniprojectideas.com/api/OnlineTest/Login',this.loginObj)
        .subscribe((result: any) => {
          debugger;
          if (result.result) {
            localStorage.setItem('LoggedUserData', JSON.stringify(result.data));
            this.router.navigateByUrl('user');
          } else {
            alert('Check email or password');
          }
          this.isApiCallInProgress = false;
        },error=>{
          alert('API Error')
        });
    }
  }
  saveUser() {
    this.userSrv.addUser(this.usersObj).subscribe((res: any) => {
      this.usersObj = res.data;
      if (res.result) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }
  viewPassword(){
    this.visible = !this.visible
    this.changetype = !this.changetype
  }
}
