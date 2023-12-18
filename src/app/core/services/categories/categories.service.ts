import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { categoryConst } from '../../constant/categoryConstant'
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private globalSrv:GlobalService) { }

  getAllCategory(){
    return this.globalSrv.get(categoryConst.category.GetAllCategories);
  }

  addBilkCategory(obj:any){
    return this.globalSrv.post(categoryConst.category.AddBulkCategories,obj);
  }

  deleteById(id:number){
    return this.globalSrv.delete(categoryConst.category.DeleteCategoryById+id)
  }
}
