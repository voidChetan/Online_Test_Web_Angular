import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUser() {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllUsers'
    );
  }
  addUser(obj: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/OnlineTest/createNewUser',
      obj
    );
  }
  getUserById(id: number) {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/OnlineTest/GetUserById?id=' + id
    );
  }

  onUpdateUser(obj: any) {
    return this.http.put(
      'https://freeapi.miniprojectideas.com/api/OnlineTest/updateUser',
      obj
    );
  }
  onDeleteUser(id: number) {
    return this.http.put(
      'https://freeapi.miniprojectideas.com/api/OnlineTest/DeleteUserById?id=',
      id
    );
  }
}
