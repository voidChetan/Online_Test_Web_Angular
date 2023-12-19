import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categoryObj: any = {
    categoryId: 0,
    categoryName: '',
    parentCategoryId: 0,
    imageUrl: '',
  };
  categoryArray: any[] = [];
  filterCatagoryArray:any[]=[];
  parentCate: any[] = [];

  constructor(private http: HttpClient,private serchSrv:SearchService) {
    this.serchSrv.searchText.subscribe((res:any)=>{
      this.filterCatagoryArray=this.categoryArray.filter((param:any)=>{
        let search = res;
        let value = Object.values(param)
        let flag = false;
        value.forEach((val: any) => {
          if (val !== null && val !== undefined && val.toString().toLowerCase().indexOf(search) > -1) {
            flag = true;
            return;
          }
        });
        if (flag) {
          return param;
        }
      });
      })

  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.http
      .get(
        'https://freeapi.miniprojectideas.com/api/OnlineTest/GetAllCategories'
      )
      .subscribe((res: any) => {
        this.categoryArray = res.data;
        this.filterCatagoryArray=res.data;
        this.parentCate = res.data.filter((m: any) => m.parentCategoryId == 0);
      });
  }
  bulkData() {
    const obj = {
      categoryId: 0,
      categoryName: '',
      parentCategoryId: 0,
      imageUrl: '',
    };
    this.categoryArray.unshift(obj);
  }
  save() {
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/OnlineTest/AddBulkCategories',
        this.categoryArray
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert(res.message);
          this.getAllCategories();
        } else {
          alert(res.message);
        }
      });
  }

  delete(id: number) {
    const isConfirm = confirm('Are You Sure Want to Delete ?');
    if (isConfirm) {
      this.http
        .delete(
          'https://freeapi.miniprojectideas.com/api/OnlineTest/DeleteCategoryById?categoryId=' +
            id
        )
        .subscribe((res: any) => {
          if (res.result) {
            alert(res.message);
            this.getAllCategories();
          } else {
            alert(res.message);
          }
        });
    }
  }
}
