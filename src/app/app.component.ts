import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name = 'Angular';

  constructor(private router: Router) {}

  isLogged() {
    var status = sessionStorage.getItem('isLoggedIn');

    return status === 'true';
  }

  onLogOff() {
    sessionStorage.removeItem('isLoggedIn');
    this.router.navigate(['login']);
  }

  goHome() {
    this.router.navigate(['home']);
  }

  goAbout() {
    this.router.navigate(['about']);
  }

  goFather() {
    this.router.navigate(['father']);
  }
}
