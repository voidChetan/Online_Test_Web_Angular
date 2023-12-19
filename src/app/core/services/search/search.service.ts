import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {



  constructor() { }

  public searchText = new BehaviorSubject<string>('');
}
