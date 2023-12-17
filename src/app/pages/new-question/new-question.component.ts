import { Component } from '@angular/core';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent {

  questionArray:any[]=[];

  questionObj={
    "questionId": 0,
    "categoryId": 0,
    "questionName": "",
    "isMultpleAnswer": true,
    "isCodeSnipet": true,
    "codeSnipetText": "",
    "quizQuestionAnswers": [
      {
        "optionId": 0,
        "questionId": 0,
        "optionText": " ",
        "isCodeSnipet": true,
        "isCorrect": true
      }
    ]


  }


}
