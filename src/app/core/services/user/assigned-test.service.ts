import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssignedTestService {
  constructor(private http: HttpClient) {}

  getAllAssignedTest() {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllAssignedTest'
    );
  }
  getAllAssignedTestByRegCode(id:number){
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllAssignedTestByRegistrationCode?regCode='+id
    );
  }
}
