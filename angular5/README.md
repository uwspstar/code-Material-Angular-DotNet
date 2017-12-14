# Angular5

## An Angular 5 & Bootstrap 4 & Firebase

```javascript

//install firebase
$ npm install --save firebase@^4.4.0 angularfire2@^5.0.0-rc.2

//install bootstrap
$ npm install --save bootstrap@next

//install anuglar bootstrap
$ npm install --save @ng-bootstrap/ng-bootstrap

```

- environments/environment.ts

```javascript
//dev env
export const environment = {
  production: false,
  firebase: {
    apiKey: "[...]",
    authDomain: "[...]",
    databaseURL: "[...]",
    projectId: "[...]",
    storageBucket: "[...]",
    messagingSenderId: "[...]"
  }
};
//prod env
export const environment = {
  production: true,
  firebase: {
    apiKey: "[...]",
    authDomain: "[...]",
    databaseURL: "[...]",
    projectId: "[...]",
    storageBucket: "[...]",
    messagingSenderId: "[...]"
  }
};

```
- app.module.ts

```javascript
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
...

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()//forRoot() is only meant to be called when adding to the root app module.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
- styles.css

```javascript
@import "~bootstrap/dist/css/bootstrap.css"

```

- app.module.ts

```javascript
```


# Base Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
