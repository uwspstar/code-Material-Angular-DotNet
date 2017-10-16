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
