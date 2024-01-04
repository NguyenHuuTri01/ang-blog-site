import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData: any = localStorage.getItem('user');
  userEmail: string = '';

  ngOnInit(): void {
    this.userEmail = JSON.parse(this.userData).email
  }

}
