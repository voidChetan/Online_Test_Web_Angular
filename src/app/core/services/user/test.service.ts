import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { testConst } from '../../constant/testConstant';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private globalSrv:GlobalService) { }

  getAllTest(){
    return this.globalSrv.get(testConst.tests.GetAllTest);
  }

  getALlquestionByTestId(){
    return this.globalSrv.get(testConst.tests.getAllQuestionByTestId);
  }

  getTestByTestId(){
    return this.globalSrv.get(testConst.tests.getTestByTestId);
  }

  createNewTest(obj:any){
    return this.globalSrv.post(testConst.tests.createNewTest,obj);
  }

  updateTest(obj:any){
    return this.globalSrv.put(testConst.tests.UpdateTest,obj);

  }

  deleteTest(id:number){
    return this.globalSrv.delete(testConst.tests.DeleteTestByTestId+id);

  }
}
