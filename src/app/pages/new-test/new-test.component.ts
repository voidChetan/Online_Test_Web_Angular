import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css'],

})
export class NewTestComponent implements OnInit {


  categoryId: number = 0;
  questionId: number = 0;

  displayAlltest:boolean=true;
  testObj: any = {
    testId: 0,
    testName: '',
    description: '',
    duration: '',
    quizTestQuestions: [],
  };
  quizQuestions: any = {
    testQuestionId: 0,
    questionId: 0,
    testId: 0,
  };

  TestArray: any[] = [];
  questionArray: any[] = [];
  filteredTestArray:any[]=[];
  categoryArray: any[] = [];

  constructor(private http: HttpClient,private msgSrv:MessageService,private searchSrv:SearchService) {
    this.searchSrv.searchText.subscribe((res:any)=>{
      this.filteredTestArray=this.TestArray.filter((param:any)=>{
        let search = res;
        let value = Object.values(param);
        let flag = false;
        value.forEach((val:any) => {
         if(val !== null && val !==undefined && val.toString().toLowerCase().indexOf(search) > -1){
          flag =true;
          return;
         }
        });
      if(flag){
        return param;
      }

      });
    })

  }

  ngOnInit(): void {
    this.getAllTest();
    this.getAllCategory();
  }

  reset(){
    this.testObj = {
      testId: 0,
      testName: '',
      description: '',
      duration: '',
      quizTestQuestions: [],
    };
    this.quizQuestions = {
      testQuestionId: 0,
      questionId: 0,
      testId: 0,
    };
  }

  getAllTest() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllTest')
      .subscribe((res: any) => {
        this.TestArray = res.data;
        this.filteredTestArray=res.data;
      });
  }

  getAllQuestion() {
    this.http
      .get(
        'https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllQuestions'
      )
      .subscribe((res: any) => {
        this.questionArray = res.data;
      });
  }

  getAllCategory() {
    this.http
      .get(
        'https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllCategories'
      )
      .subscribe((res: any) => {
        this.categoryArray = res.data;
      });
  }

  changeCategory() {
    this.http
      .get(
        'https://freeapi.miniprojectideas.com/api/OnlineTest/getAllQuestionByCategoryId?categoryId=' +
          this.categoryId
      )
      .subscribe((res: any) => {
        this.questionArray = res.data;
      });
  }

  bulkAddData() {
    this.quizQuestions.questionId=this.questionId;
    const filter=this.questionArray.find(m=> m.questionId ==  this.quizQuestions.questionId)

    const obj = JSON.stringify(filter);
    const parse = JSON.parse(obj);
    const questionobj= {
      testQuestionId: 0,
      questionId: parse.questionId,
      questionName:parse.questionName,
      testId: 0,
    };

    this.testObj.quizTestQuestions.push(questionobj);


  }

  save() {
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/OnlineTest/createNewTest',
        this.testObj
      )
      .subscribe((res: any) => {
        if (res.result) {
        this.msgSrv.add({ severity: 'success', summary: 'Successfully', detail: res.message });
          this.reset();
          this.getAllTest();
        } else {
          this.msgSrv.add({ severity: 'error', summary: 'Error', detail: res.message });
          // alert(res.message);
        }
      });
  }

   edit(id:number){
    this.displayAlltest=false;
    this.http.get("https://freeapi.miniprojectideas.com/api/OnlineTest/getTestByTestId?testId="+id).subscribe((res:any)=>{
      this.testObj=res.data;
      this.testObj.quizTestQuestions=res.data.quizTestQuestions;
    })

   }

   deletetest(id:number){
    const isConfirm = confirm('Are You Sure Want to Delete ?');
    if (isConfirm) {
      this.http.get('https://freeapi.miniprojectideas.com/api/OnlineTest/DeleteTestByTestId?id='+id).subscribe((res: any) => {
          if (res.result) {
            alert(res.message);
            this.getAllTest();
          } else {
            alert(res.message);
          }
        });
    }

   }
}
