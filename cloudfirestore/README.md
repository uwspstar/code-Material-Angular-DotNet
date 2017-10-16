# Cloudfirestore

Recommand to watch [Cloud Firestore Tutorial using Angular (AngularFire5)](https://www.youtube.com/watch?v=0Nah3foeyCM) by DesignCourse

- Setup
```javascript
// create cloudfirestore project
$ ng new cloudfirestore

// install angular firebase
$ npm install angularfire2 firebase --save

// run project
$ ng serve
```

- copy the configuration to src/environments/enviroment.ts page , ( .prod.ts page also)

```javascript
export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR API KEY", // <-- your api key
    authDomain: "db2017-9dd94.firebaseapp.com",
    databaseURL: "https://db2017-9dd94.firebaseio.com",
    projectId: "YOUR PROJECT ID",
    storageBucket: "",
    messagingSenderId: "759738631975"
  }
};
```

- app.module.ts
```javascript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/Auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

//...

imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],

```
- try firestor beta under the database
```javascript
--> start in test mode -->  enable
--> ADD COLLECTION --> Collection name --> NEXT
--> Filed ... --> SAVE
```

- app.component.ts
```javascript
import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  constructor(private afs: AngularFirestore) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.postsCollection = this.afs.collection('posts');
    this.posts = this.postsCollection.valueChanges();
  }
}
```

- modify the app.component.html
```
<ul *ngFor="let post of posts | async">
    <li>
        <strong>{{post.title}}</strong>
        <br> {{post.content}}
    </li>
</ul>
```
- add more document on firestore, you will see the real time changes

 
