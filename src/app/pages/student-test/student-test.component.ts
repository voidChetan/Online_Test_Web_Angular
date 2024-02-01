import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.css'],
})
export class StudentTestComponent implements OnInit {
  testArray: any[] = [];
  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    this.getAllTest();
  }

  getAllTest() {
    this.http
      .get('https://freeapi.gerasim.in/api/OnlineTest/GetAllTest')
      .subscribe((res: any) => {
        this.testArray = res.data;
      });
  }

  startTest(id: number) {
    this.route.navigate(['/start-test', id]);
  }
}
