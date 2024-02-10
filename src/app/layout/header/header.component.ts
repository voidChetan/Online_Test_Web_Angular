import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  retrievedData:any;

  constructor(private route:Router){
    let storedData = localStorage.getItem('LoggedUserData');

    // Parse the JSON data
    if (storedData) {
      this.retrievedData = JSON.parse(storedData);
    } else {
      this.retrievedData = 'No data found in local storage.';
    }
  }
  @Output() menuToggled = new EventEmitter<boolean>();

 


  logout(): void {
    localStorage.clear();
   this.route.navigateByUrl("/login");
   
  }
}
