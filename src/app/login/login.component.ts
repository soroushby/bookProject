import { RouterModule, Router } from '@angular/router';
import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  ui: firebaseui.auth.AuthUI;
  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private ngzone: NgZone) { }

  ngOnInit() {

    const uiconfig: any =  {

      signInOptions:  [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID

      ],

      callbacks: {
        signInSuccessWithAuthResult: this.onLoginSuccesful.bind(this)
      }
    };

    this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);
    this.ui.start('#firebase-auth-container', uiconfig );
  }

  ngOnDestroy() {
    this.ui.delete();
  }

  onLoginSuccesful(results: any) {
    console.log('Firebase UI results', results);
    this.ngzone.run(() => this.router.navigateByUrl('/showbook'));
  }



}
