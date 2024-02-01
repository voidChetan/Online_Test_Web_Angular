import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';

import { QuestionService } from 'src/app/core/services/question/question.service';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css'],
})
export class NewQuestionComponent {
  filterQuestionArray: any[] = [];
  questionArray: any[] = [];
  catagoryArray: any[] = [];
  addquestion: boolean = false;
  editQuestion: boolean = false;
  option: boolean = false;
  edit: boolean = false;
  questionObj: any = {
    questionId: 0,
    categoryId: 0,
    questionName: '',
    isMultpleAnswer: false,
    isCodeSnipet: true,
    codeSnipetText: '',
    quizQuestionAnswers: [],
  };

  optionObj: any = {
    optionId: 0,
    questionId: 0,
    optionText: ' ',
    isCodeSnipet: false,
    isCorrect: false,
  };

  constructor(
    private questionSer: QuestionService,
    private msgSer: MessageService,
    private searchSrv: SearchService,
    private cateSrv: CategoriesService
  ) {
    this.searchSrv.searchText.subscribe((res: any) => {
      this.filterQuestionArray = this.searchSrv.getFilteredData(
        this.questionArray,
        res
      );
    });
  }

  ngOnInit(): void {
    this.loadQuestion();
    this.loadCatagory();
  }

  loadQuestion() {
    this.questionSer.getAllQuestion().subscribe((res: any) => {
      this.questionArray = res.data;
      this.filterQuestionArray = res.data;
    });
  }

  loadCatagory() {
    this.cateSrv.getAllCategory().subscribe((res: any) => {
      this.catagoryArray = res.data;
      console.log(this.catagoryArray);
    });
  }

  addQuize() {
    const obj = JSON.stringify(this.optionObj);
    const parseObj = JSON.parse(obj);

    this.questionObj.quizQuestionAnswers.push(parseObj);
  }

  onSave() {
    this.questionSer.newQuestion(this.questionObj).subscribe((res: any) => {
      if (res.result) {
        this.msgSer.add({
          severity: 'success',
          summary: 'Successfully',
          detail: res.message,
        });
        // this.msgSer.add({ severity: 'success', summary: 'Successfully', detail: res.message });
        // alert("question Added");
      } else {
        alert(res.message);
      }
    });
    // this.questionSer.newQuestion(this.questionObj).subscribe((res:any)=>{
    //   if(res.result){
    //     alert("Question Added");
    //     this.loadQuestion();
    //   }
    //   else{
    //     alert(res.message);
    //   }
    // })
  }

  onUpdate() {
    this.questionSer.updateQuestion(this.questionObj).subscribe((res: any) => {
      if (res.result) {
        alert('Question Updated');
        this.loadQuestion();
      } else {
        alert(res.message);
      }
    });
  }

  onEdit(item: any) {
    this.questionObj = item;
  }

  onDelete(id: number) {
    const isDelet = confirm('Are you sure want to delete');
    if (isDelet == true) {
      this.questionSer.deleteQuestionById(id).subscribe((res: any) => {
        if (res.result) {
          // this.loadEmployees();
          alert('Question Deleted');
          this.loadQuestion();
        } else {
          alert(res.Message);
        }
      });
    }
  }
}
