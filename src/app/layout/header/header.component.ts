import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'Enea';

  // constructor(private authService: AuthService) { }

  logout(): void {
    console.log('Logged out');
  }
}
