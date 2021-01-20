import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = false;

  title = 'AngularKurs';

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
