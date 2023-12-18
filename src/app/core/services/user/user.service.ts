import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { userConst } from '../../constant/userConstant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private globalSrv:GlobalService) {}

  getUser() {
    return this.globalSrv.get(userConst.users.GetAllUsers)
  }

  addUser(obj: any) {
    return this.globalSrv.post(userConst.users.createNewUser,obj);
  }
  getUserById(id: number) {
    return this.globalSrv.get(userConst.users.GetUserById+id);
  }

  onUpdateUser(obj: any) {
    return this.globalSrv.put(userConst.users.updateUser,obj);
  }
  onDeleteUser(id: number) {
    return this.globalSrv.delete(userConst.users.DeleteUserById+id);
  }
}
