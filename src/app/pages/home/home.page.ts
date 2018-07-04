import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AUTH_CONFIG } from '../../auth/auth0-variables';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  userInfo: any;

  constructor(
    private auth: AuthService,
    private http: HttpClient) { }

    ngOnInit() {
      if (this.auth.isAuthenticated) {
        this.auth.getProfile((err, profile) => {
          this.callAPI();
        });
      }
    }

    callAPI() {

      this.http.get(`${AUTH_CONFIG.apiUrl}/api/UserOptions/`, {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
          .set('email', `${this.auth.userProfile.email}`)
      })
        .subscribe(
          data => this.userInfo = data,
          error => console.log(`Error: ${JSON.stringify(error)}`)
        );
    }
}
