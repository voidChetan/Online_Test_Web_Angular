import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    tags: ''
  };
  languageArray: any[] = [];
  topicArray: any[] = [];
  editQuestionId: number = 0;

  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((res:any)=>{
      if(res.id) {
        this.editQuestionId =  res.id;
        this.GetQuestionbyquestionid();
      }
    })
  }

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
  GetQuestionbyquestionid() {
    this.http
      .get('https://freeapi.gerasim.in/api/Interview/GetQuestionbyquestionid?id='+this.editQuestionId)
      .subscribe((res: any) => {
        this.addQue = res.data;
        this.languageId = this.addQue.languageId;
        this.http.get('https://freeapi.gerasim.in/api/Interview/GetLanguageTopicById?id=' +
        this.languageId
        )
        .subscribe((res: any) => {
          this.topicArray = res.data;
        });
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
    this.http.post('https://freeapi.gerasim.in/api/Interview/addLanguageQuestion',obj)
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
