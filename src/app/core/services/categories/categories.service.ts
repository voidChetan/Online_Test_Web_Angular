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
}
