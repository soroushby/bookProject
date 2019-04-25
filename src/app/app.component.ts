import { AddbooksService } from './services/addbooks.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bookProject';
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private af: AngularFireAuth) {

  }

  ngOnInit() {

    this.af.authState.subscribe(user => console.log(user));
    this.isLoggedIn$ = this.af.authState.pipe(map(user => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

  }

  logout() {
    this.af.auth.signOut();
  }

}



