import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData: any = localStorage.getItem('user');
  userEmail: string = '';
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userEmail = JSON.parse(this.userData).email;
  }
  onLogOut() {
    this.authService.logOut();
  }

}
