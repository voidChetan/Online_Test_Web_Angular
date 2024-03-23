import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-question-list',
  templateUrl: './interview-question-list.component.html',
  styleUrls: ['./interview-question-list.component.css']
})
export class InterviewQuestionListComponent {
  questionList: any[] = [];
  languageId: string = '';
  topicId: string = '';
  languageArray: any[] = [];
  topicArray: any[] = [];
  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.getAllQuestions();
    this.getAllLanguages();
  }
  
  onedit(item:any ) {
    this.router.navigate(['/add-interview-Question',item.questionId]) 
  }
  getAllQuestions() {
    this.http
      .get('https://freeapi.gerasim.in/api/Interview/GetAllQuestions')
      .subscribe((res: any) => {
        this.questionList = res.data;
      });
  }
  getAllLanguages() {
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
    this.topicId= '';
    this.http
      .get(
        'https://freeapi.gerasim.in/api/Interview/GetLanguageTopicById?id=' +
          this.languageId
      )
      .subscribe((res: any) => {
        this.getQueByLang(this.languageId)
        this.topicArray = res.data;
      });
  }
  onSearch() {
    if(this.languageId !='' && this.topicId != '') {
      this.http
      .get(
        'https://freeapi.gerasim.in/api/Interview/GetQuestionByTopicId?id=' +
          this.topicId
      )
      .subscribe((res: any) => {
       if(res) {
        this.questionList  = res.data;
       }
      });
    } else if (this.languageId !='' && this.topicId == '' ) {
      this.getQueByLang(this.languageId)
    }
   
  }
  getQueByLang(id: string) {
    this.http.get('https://freeapi.gerasim.in/api/Interview/GetAllQuestionsByLanguageId?id=' + id)
    .subscribe((res: any) => {
     if(res) {
      this.questionList  = res.data;
     }
    });
  }
}
