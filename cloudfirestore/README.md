# Cloudfirestore

- Recommand to watch [Firestore With AngularFire5 Quick Start](https://angularfirebase.com/lessons/firestore-with-angularfire-basics/) by Jeff Delaney
- Recommand to watch [Cloud Firestore Tutorial using Angular (AngularFire5)](https://www.youtube.com/watch?v=0Nah3foeyCM) by DesignCourse

### Firestore vs. RealtimeDB
```
Firestore ≈ RealtimeDB
Collection ≈ List
Document ≈ Object
Id ≈ Push Key
```

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
```html
<ul *ngFor="let post of posts | async">
    <li>
        <strong>{{post.title}}</strong>
        <br> {{post.content}}
    </li>
</ul>
```
- add more document on firestore, you will see the real time changes

- update app.component.html
```html
<input type="text" [(ngModel)]="title" name="title" placeholder="Title..">
<textarea [(ngModel)]="content" name="content" id="content" cols="30" rows="10" placeholder="Content.."></textarea>
<input type="submit" value="Add a post" (click)="addPost()">


<ul *ngFor="let post of posts | async">
    <li>
        <strong>{{post.title}}</strong>
        <br> {{post.content}}
    </li>
</ul>
```

- update app.component.ts
```javascript
import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: Observable<Post>;
  postDoc: AngularFirestoreDocument<Post>;

  postsCollection: AngularFirestoreCollection<Post>;
  // posts: Observable<Post[]>;
  posts: any;
  title: string;
  content: string;

  constructor(private afs: AngularFirestore) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.postsCollection = this.afs.collection('posts');
    // this.posts = this.postsCollection.valueChanges();
    this.posts = this.postsCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });

  }

  // add new post to firestore
  addPost() {
    // this.afs.collection('posts').doc('my-custom-id').set({ 'title': this.title, 'content': this.content });
    this.afs.collection('posts').add({ 'title': this.title, 'content': this.content });
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('posts/' + postId).delete();
  }
}

```
- update app.component.html
```html
<input type="text" [(ngModel)]="title" name="title" placeholder="Title..">
<textarea [(ngModel)]="content" name="content" id="content" cols="30" rows="10" placeholder="Content.."></textarea>
<input type="submit" value="Add a post" (click)="addPost()">


<ul *ngFor="let post of posts | async">
    <li (click)="getPost(post.id)" style="border:1px solid #e00;padding:.6rem;">

        <strong>{{post.data.title}} (<a href="#" (click)="deletePost(post.id)">Delete</a>)</strong>
        <br> {{post.data.content}}
    </li>
</ul>

<h1>A Post Detail</h1>
<div style="background: skyblue; padding:1rem">
    <h3>{{(post | async)?.title}}</h3>
    <p>{{(post | async)?.content}}</p>
</div>
```