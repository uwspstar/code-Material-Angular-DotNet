
## Install Ionic and Firebase

```javascript
$ npm install -g ionic@latest

$ ionic start CRUD

>blank .............. ionic-angular A blank starter project

$ cd crud

$ npm install firebase angularfire2

```

- create firebase.credential.ts
```javascript
export const FIREBASE_CREDENTIALS ={
    apiKey: "yourkey",
    authDomain: "ionic3firebasecrud-7de86.firebaseapp.com",
    databaseURL: "https://ionic3firebasecrud-7de86.firebaseio.com",
    projectId: "yourprojctid",
    storageBucket: "",
    messagingSenderId: "yourid"
}
```
- update the app.module.ts
```javascript
import { AngularFireModule} from 'angularfire2'
import { FIREBASE_CREDENTIALS } from './firebase.credentials'
...
imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS)
  ],
...
```


This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

