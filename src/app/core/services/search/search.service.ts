import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  public searchText = new BehaviorSubject<string>('');

  getFilteredData(array: any[], serachText: string) {
    return array.filter((param: any) => {
      let search = serachText;
      let value = Object.values(param);
      let flag = false;
      value.forEach((val: any) => {
        if (
          val !== null &&
          val !== undefined &&
          val.toString().toLowerCase().indexOf(search) > -1
        ) {
          flag = true;
          return;
        }
      });
      if (flag) {
        return param;
      }
    });
  }
}
