import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;
  retrievedData:any;

  constructor(private observer: BreakpointObserver) {
    let storedData = localStorage.getItem('LoggedUserData');

    // Parse the JSON data
    if (storedData) {
      this.retrievedData = JSON.parse(storedData);
    } else {
      this.retrievedData = 'No data found in local storage.';
    }

  }

  toggleMenu() {
   
      if(this.isMobile){
        this.sidenav.toggle();
        this.isCollapsed = false; // On mobile, the menu can never be collapsed
      } else  {
        this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
        this.isCollapsed = !this.isCollapsed;
        
      }
    
   
  }

  ngOnInit() {

    
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

}
