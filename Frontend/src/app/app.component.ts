  import { Component } from '@angular/core';
  import { NavigationEnd, Router } from '@angular/router';
  import { AuthService } from './services/auth.service';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
    title = 'Shopping-front';
    isAdminRoute: boolean = false;
    isLoginRoute: boolean = false;
    isUserLoggedIn: boolean = false;

    constructor(private router: Router, private authService: AuthService) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isAdminRoute = event.url.startsWith('/admin');
          this.isLoginRoute = this.router.url.startsWith('/user');
          this.isUserLoggedIn = this.authService.isUserLoggedIn();
        }
      });
    }
  }
