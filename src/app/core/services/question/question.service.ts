import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getAllQuestion(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllQuestions");
  }

  newQuestion(obj:any){
    return this.http.post("https://freeapi.miniprojectideas.com/api/OnlineTest/createNewQuestion",obj);
  }

  updateQuestion(obj:any){
    return this.http.put("https://freeapi.miniprojectideas.com/api/OnlineTest/UpdateQuestion",obj);
  }

  deleteQuestionById(id:number){
    return this.http.get("https://freeapi.miniprojectideas.com/api/OnlineTest/DeleteQuestionById?id="+id)

  }
  getAllCatagory(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllCategories");
  }
  getQuestionById(id:number){
    return this.http.get("https://freeapi.miniprojectideas.com/api/OnlineTest/getQuestionId?questionId="+id);

  }
}
