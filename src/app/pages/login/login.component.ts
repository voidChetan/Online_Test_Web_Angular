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
    private userSrv: UserService,
    private route: Router
  ) {
    const id = localStorage.getItem('LoggedUserData');
    // if(id != null ){
    //   this.route.navigateByUrl("user")
    // }
    // else{
    //   this.route.navigateByUrl("login");
    // }
  }

  onLogin() {
    if (this.isApiCallInProgress == false) {
      this.isApiCallInProgress = true;
      this.http
        .post(
          'https://freeapi.miniprojectideas.com/api/OnlineTest/Login',
          this.loginObj
        )
        .subscribe(
          (result: any) => {
            if (result.result) {
              localStorage.setItem(
                'LoggedUserData',
                JSON.stringify(result.data)
              );
              if (result.data.role == 'admin') {
                this.route.navigateByUrl('user');
              } else if (
                result.data.role == 'student' ||
                result.data.role == 'Student'
              ) {
                this.route.navigateByUrl('student-Test');
              }
              //this.router.navigateByUrl('user');
            } else {
              alert('Check email or password');
            }
            this.isApiCallInProgress = false;
          },
          (error) => {
            alert('API Error');
          }
        );
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
  viewPassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
