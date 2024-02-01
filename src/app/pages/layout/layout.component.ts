import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  retrievedData: any;

  constructor(private serchSrv: SearchService, private route: Router) {
    let storedData = localStorage.getItem('LoggedUserData');

    // Parse the JSON data
    if (storedData) {
      this.retrievedData = JSON.parse(storedData);
    } else {
      this.retrievedData = 'No data found in local storage.';
    }
  }

  enteredSerchValue: string = '';

  onSerchChange(text: string) {
    this.serchSrv.searchText.next(text);
  }
}
