import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que-interview',
  templateUrl: './que-interview.component.html',
  styleUrls: ['./que-interview.component.css'],
})
export class QueInterviewComponent implements OnInit {
  languageId: string = '';
  topicId: string = '';

  addQue: any = {
    questionId: 0,
    languageTopicId: '',
    question: '',
    answer: '',
    isPhotos: true,
    createdDate: '',
    isDelete: true,
    orderNo: 0,
  };
  languageArray: any[] = [];
  topicArray: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllLanguage();
  }
  getAllLanguage() {
    this.http
      .get('https://freeapi.gerasim.in/api/Interview/GetAllLanguage')
      .subscribe((res: any) => {
        this.languageArray = res.data;
      });
  }

  getALlTopic() {
    this.http
      .get(
        'https://freeapi.gerasim.in/api/Interview/GetLanguageTopic'
      )
      .subscribe((res: any) => {
        this.topicArray = res.data;
      });
  }

  getTopic() {
    this.http
      .get(
        'https://freeapi.gerasim.in/api/Interview/GetLanguageTopicById?id=' +
          this.languageId
      )
      .subscribe((res: any) => {
        this.topicArray = res.data;
      });
  }
  addLanguageQuestions(obj: any) {
    this.http
      .post(
        'https://freeapi.gerasim.in/api/Interview/addLanguageQuestion',
        obj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Added successdully....');
          this.addQue  = {
            questionId: 0,
            languageTopicId: 0,
            question: '',
            answer: '',
            isPhotos: true,
            createdDate: '',
            isDelete: true,
            orderNo: 0,
          };
        } else {
          alert('Error...');
        }
      });
  }
}
