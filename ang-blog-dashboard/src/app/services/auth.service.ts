import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  localStorageValue: any;
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem('user') ? true : false);
  isLoggedInGuard: boolean = localStorage.getItem('user') ? true : false;

  constructor(
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(logRef => {
      this.toastr.success('Logged In Successfully');
      this.loadUser();
      this.loggedIn.next(true);
      this.isLoggedInGuard = true;
      this.router.navigate(['/']);
    }).catch(e => {
      this.toastr.warning(e.message);
    })
  }

  loadUser() {
    this.afAuth.authState.subscribe(user => {
      localStorage.setItem('user', JSON.stringify(user));
    })
  }
  logOut() {
    this.afAuth.signOut().then(() => {
      this.toastr.success('User Logged Out Successfuly');
      localStorage.removeItem('user');
      this.loggedIn.next(false);
      this.isLoggedInGuard = false;
      this.router.navigate(['/login']);
    });
  }
  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

}
