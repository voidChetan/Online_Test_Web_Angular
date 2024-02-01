import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssignedTestService {
  constructor(private http: HttpClient) {}

  getAllAssignedTest() {
    return this.http.get(
      'https://freeapi.gerasim.in/api/OnlineTest/GetAllAssignedTest'
    );
  }
  getAllAssignedTestByRegCode(id: number) {
    return this.http.get(
      'https://freeapi.gerasim.in/api/OnlineTest/GetAllAssignedTestByRegistrationCode?regCode=' +
        id
    );
  }
  assignedTest(obj: any) {
    return this.http.post(
      'https://freeapi.gerasim.in/api/OnlineTest/assignTest',
      obj
    );
  }
  bulkUpdateTest(arr: any) {
    return this.http.put(
      'https://freeapi.gerasim.in/api/OnlineTest/bulkUpdateAssignedTest',
      arr
    );
  }
  deleteAssignedTestBytestId(id: number) {
    return this.http.get(
      'https://freeapi.gerasim.in/api/OnlineTest/DeleteAssignedTestByAssignTestId?assignedTestId=' +
        id
    );
  }
}
