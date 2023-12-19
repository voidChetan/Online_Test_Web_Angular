import { Component } from '@angular/core';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private serchSrv:SearchService){

  }
  enteredSerchValue:string = '';

  onSerchChange(text:string){


      this.serchSrv.searchText.next(text);


  }
}
