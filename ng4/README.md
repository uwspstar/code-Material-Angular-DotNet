# Ng4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

# Secontion 1 : Project setup

## Step 1 : install new Ng4 project

- Development server

```
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
```

- Code scaffolding

```
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
```

- Build

```
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
```

- Running unit tests

```
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
```

- Running end-to-end tests

```
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
```

- Further help

```
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
```

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

```
Run > npm i --save firebase@4.2.0
```

## Step 4 : 

```
Run > npm i --save angularfire2@4.0.0-rc.1
```

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
Run > ng g c login
```

## Step 12 : add router in the app.component.ts

```
 RouterModule.forRoot([
      { path:'', component:HomeComponent},
      { path:'products', component:ProductsComponent},
      { path:'shopping-care', component:ShoppingCartComponent},
      { path:'check-out', component:CheckOutComponent},
      { path:'order-success', component:OrderSuccessComponent},
      { path:'login', component:LoginComponent},
      { path:'admin/products', component: AdminProductsComponent},
      { path:'admin/orders', component: AdminOrdersComponent}
    ])
```

## Step 13 : update bs-navbar

```
<li class="nav-item active">
    <a class="nav-link" routerLink="/">Home <span class="sr-only">(current)</span></a>
</li>
<li class="nav-item">
    <a class="nav-link" routerLink="/shopping-cart">Shopping Cart</a>
</li>
```

## Step 14 : add ng-bootstrap to dropdown in bs-navbar,and module to app.module

```
[ng-bootstrap](https://ng-bootstrap.github.io/#/home)
```

```
Run > npm install --save @ng-bootstrap/ng-bootstrap
```

- app.module
```
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
```

```
NgbModule.forRoot(),
```

- bs-navba
```
<li ngbDropdown class="nav-item dropdown">
<a ngbDropdownToggle class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
<div ngbDropdownMenu class="dropdown-menu" aria-labelledby="dropdown01">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
</div>
</li>
```

## Step 15 : update dropdown in bs-navbar and app.module

- html
```
<li ngbDropdown class="nav-item dropdown">
    <a ngbDropdownToggle class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div ngbDropdownMenu class="dropdown-menu show" aria-labelledby="dropdown01">
        <a class="dropdown-item" routerLink="/my/orders">My Orders</a>
        <a class="dropdown-item" routerLink="/admin/orders">Manage Orders</a>
        <a class="dropdown-item" routerLink="/admin/products">Manage Products</a>
        <hr/>
        <a class="dropdown-item">Log Out</a>
    </div>
</li>
```
- css
```
.dropdown-toggle{
    cursor: pointer;
}
```
- app.module router

```
{ path:'my/orders', component:MyOrdersComponent},

```
# DEPLOYMENT ON FIREBASE 
```
[Deploy Your Site on Firebase](https://firebase.google.com/docs/hosting/deploying)
```

## Step 16 : deploy to Firebase 

- install

```
Run > npm install -g firebase-tools

Run > firebase login
 
NOTE : will open the browser to let login with your email

Run > firebase init

NOTE : follow the steps
```

- Update firebase.json file

```
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

```
Run > ng build --prod
```

```
Run > firebase deploy

NOTE : 
Project Console: https://console.firebase.google.com/project/db2017-9dd94/overview
Hosting URL: https://db2017-9dd94.firebaseapp.com
```

# Secontion 2 : Authentication and Authorization

## Step 1 : enable the google "SIGN-IN METHOD"

```
https://console.firebase.google.com/project/db2017-9dd94/authentication/providers
```

## Step 2 : update bs-navbar

- html

```
<li class="nav-item">
    <a class="nav-link" routerLink="/login">Login</a>
</li>
```

## Step 3 : update login component

- html

```
<button (click)="login()" class="btn btn-primary">Login with Google</button>

```

- login.component.ts

```
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private afAuth : AngularFireAuth) { 

  }

  login(){
    var provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
  }
}

```

- if you see error below, you just need to enable your "Identity Toolkit API" on [console.developers.google API Page Library](https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com/overview?project=db2017-9dd94&pli=1&duration=PT1H)

```
{
 "error": {
  "errors": [
   {
    "domain": "usageLimits",
    "reason": "accessNotConfigured",
    "message": "Access Not Configured. Google Identity Toolkit API has not been used in project 759738631975 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com/overview?project=759738631975 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.",
    "extendedHelp": "https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com/overview?project=759738631975"
   }
  ],
  "code": 403,
  "message": "Access Not Configured. Google Identity Toolkit API has not been used in project 759738631975 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com/overview?project=759738631975 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry."
 }
}
```