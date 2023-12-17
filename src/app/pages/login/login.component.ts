import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showRegister:any;
  visible:boolean=false;
  isFormSubmited:boolean=false;
  changetype:any;
  isApiCallInProgress:boolean=false;
  loginObj:any=
  {
    "emailid": "",
    "password": ""
  }
  usersObj:any={

      "userId": 0,
      "emailid": "",
      "mobileNo": "",
      "password": "",
      "fullName": "",
      "gender": "",
      "registrationCode": "",
      "collegeName": "",
      "stream": "",
      "role": ""

  }


  constructor(private http:HttpClient){}
  viewPassword(){}
  onLogin(){
    this.http.post('https://freeapi.miniprojectideas.com/api/OnlineTest/Login',this.loginObj).subscribe((res: any)=>{

    })
  }
  saveUser(){}

}
