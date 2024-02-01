import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profileArray: any[] = [];
  retrievedData: any;
  profileObj: any = {
    userId: 0,
    emailid: ' ',
    mobileNo: ' ',
    password: ' ',
    fullName: ' ',
    gender: ' ',
    registrationCode: ' ',
    collegeName: ' ',
    stream: ' ',
    role: ' ',
  };
  constructor(private http: HttpClient) {
    let storedData = localStorage.getItem('LoggedUserData');
    console.log(storedData);
  }

  onUpdate() {
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/OnlineTest/updateUser',
        this.profileObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Updated Profile');
        }
      });
  }
}
