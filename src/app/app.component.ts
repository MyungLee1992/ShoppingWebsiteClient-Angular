import { Component, OnInit, } from '@angular/core';
import { User } from './auth/models/user';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'mw-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  username: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    const username = localStorage.getItem('currentUser');
    if (username != null) {
      this.username = username;
    }
  }

}

