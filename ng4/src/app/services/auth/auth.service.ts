import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>; // User can be as a customized UserClass

  constructor( private afAuth: AngularFireAuth, private route: ActivatedRoute  ) {
    this.user$ = afAuth.authState;
  }

  login() {

    // tslint:disable-next-line:prefer-const
    let returnUrl: string  =  this.route.snapshot.queryParamMap.get('returnUrl')  || '/';
    localStorage.setItem('returnUrl', returnUrl);
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
