# Ng4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

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
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Step 1 : install new angular4 project

## Step 2 : install firebase db2017 project 

copy the configuration to src/environments/enviroment.ts page , ( .prod.ts page also)

```
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCUmpQN17c8WI8VINP9V-d1xxqu_Z4alf0",
    authDomain: "db2017-9dd94.firebaseapp.com",
    databaseURL: "https://db2017-9dd94.firebaseio.com",
    projectId: "db2017-9dd94",
    storageBucket: "",
    messagingSenderId: "759738631975"
  }
};
```
## Step 3 : 
Run > npm i --save firebase@4.2.0

## Step 4 : 
Run > npm i --save angularfire2@4.0.0-rc.1

## Step 5 : app.module.ts
```
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/Auth'
import { environment } from "../environments/environment";
```
... 

```
imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ]

```

## Step 6 : install bootstrap4

```
Run > npm i --save bootstrap
Run > npm i --save bootstrap@next

```


## Step 7 : import bootstrap4 to style.css

```
@import '~bootstrap/dist/css/bootstrap.css';

```
NOTE : [bootstrap4 siten](https://getbootstrap.com/)

## Step 8 : import bootstrap4 nav starter templet to app.component.html

- https://getbootstrap.com/docs/4.0/examples/starter-template/

- at style.css page
```
body {
    padding-top: 5rem;
}

```

## Step 9 : create new bs-navbar component

```
Run > ng g c bs-navbar

```

## Step 10 : move navbar section to the component

## Step 11 : create following components

```
Run > ng g c home
Run > ng g c products
Run > ng g c shopping-cart
Run > ng g c check-out
Run > ng g c order-success
Run > ng g c my-orders
Run > ng g c admin/admin-products
Run > ng g c admin/admin-orders

```