import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  parentCate: any[] = [];

  constructor(private http: HttpClient) {}

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
