import { environment } from './../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { Observable } from 'rxjs';
import { questionConst } from '../../constant/questionConstant';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  apiStartPoint: String = environment.apiURL;

  constructor(private global:GlobalService) { }

  getAllQuestion(): Observable<any>{
    return this.global.get(questionConst.question.GetAllQuestions);
  }

  newQuestion(obj:any): Observable<any>{
    return this.global.post(questionConst.question.createNewQuestion,obj);
  }

  updateQuestion(obj:any): Observable<any>{
    return this.global.put(questionConst.question.UpdateQuestion,obj);
  }

  deleteQuestionById(id:number): Observable<any>{
    return this.global.get(questionConst.question.getQuestionById+id)

  }
  // getAllCatagory(): Observable<any>{
  //   return this.global.get(questionConst.question.getAllCatagory);
  // }
  getQuestionById(id:number): Observable<any>{
    return this.global.get(questionConst.question.getQuestionById+id);

  }
}
