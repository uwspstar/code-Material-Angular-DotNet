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

```javascript
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

```javascript
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/Auth'
import { environment } from "../environments/environment";
```
... 

```javascript
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
NOTE : [bootstrap4 site](https://getbootstrap.com/)

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

```javascript
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

```html
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
```javascript
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
```

```javascript
NgbModule.forRoot(),
```

- bs-navba

```html
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

```html
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

```javascript
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

```html
<li class="nav-item">
    <a class="nav-link" routerLink="/login">Login</a>
</li>

...

<a class="dropdown-item" (click)="logout()">Log Out</a>
            
```

## Step 3 : update login component

- html

```html
<button (click)="login()" class="btn btn-primary">Login with Google</button>

```

- login.component.ts

```javascript
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

- NOTE : If you see `ERROR` below, you just need to enable your `Identity Toolkit API` on [console.developers.google API Page Library](https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com/overview?project=db2017-9dd94&pli=1&duration=PT1H)

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

## Step 4 : update logout

- bs-navbar.component.ts

```javascript
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(x=>console.log(x));
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
```

## Step 5 : update logout and login

- bs-navbar.component.ts

```javascript
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe( user => {this.user = user; console.log(user)});
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
```

- bs-navbar.component.html

```html
<li *ngIf="!user" class="nav-item">
    <a class="nav-link" routerLink="/login">Login</a>
</li>
<li ngbDropdown *ngIf="user" class="nav-item dropdown">
    <a ngbDropdownToggle class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {{user.email }}
    </a>
...
```

NOTE : `user` has `user.displayName` , `user.email`

## Step 6 : update Observe with Async

- bs-navbar.component.ts

```javascript
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) { 
    this.user = afAuth.authState;
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}

```

- bs-navbar.component.html

```html
<ng-template #anonymousUser>
    <li class="nav-item">
        <a class="nav-link" routerLink="/login">Login</a>
    </li>
</ng-template>

<li ngbDropdown *ngIf="user$ | async as user; else anonymousUser" class="nav-item dropdown">
    <a ngbDropdownToggle class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{user.email }}
    </a>
            ...
```

## Step 7 : Refactor router to app-routing.module same level as app.module

- create new app-routing.module
```javascript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
      { path: '', component: HomeComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'check-out', component: CheckOutComponent},
      { path: 'order-success', component: OrderSuccessComponent},
      { path: 'my/orders', component: MyOrdersComponent},
      { path: 'login', component: LoginComponent},
      { path: 'admin/products', component: AdminProductsComponent},
      { path: 'admin/orders', component: AdminOrdersComponent}
];


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }) // <-- debugging purposes
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}

```

- update app.module

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Step 8 : Refactor auth service, login component and bs-navbar component 

NOTE : DO unit test Components.  CANOOT unit test Service. 

- auth service
```
Run > ng g s auth
```
- update app.module

```javascript
...
import { AuthService } from './services/auth/auth.service';

...
providers: [
    AuthService
  ],
...
```
- update auth.service

```javascript
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor( private afAuth: AngularFireAuth ) {
    this.user$ = afAuth.authState;
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}

```
- update login component

```javascript
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) {

  }

  login() {
   this.auth.login();
  }
}
```
- update bs-navbar component

```javascript

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(public auth: AuthService) {
  }

  logout() {
    this.auth.logout();
  }

}
```
- update bs-navbar html

```html
...
<li ngbDropdown *ngIf="auth.user$ | async as user; else anonymousUser" class="nav-item dropdown">
  <a ngbDropdownToggle class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {{user.email }}
  </a>
...
```

## Step 9 : limit the anonymousUser access the url with auth-guard service

```
Run >  ng g s services/auth/auth-guard
```
- AuthGuardService

```javascript
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {

    return this.auth.user$.map(user => {
      if (user) {
          return true;
        }

      this.router.navigate(['/login']);
      return false;
    });

  }
}
```
- update app.module

```javascript
...
providers: [
    AuthService,
    AuthGuardService
  ],
...
```
- update app-routing.module
```javascript
...
const appRoutes: Routes = [
      { path: '', component: HomeComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'login', component: LoginComponent},

      { path: 'check-out', component: CheckOutComponent, canActivate : [ AuthGuardService ]},
      { path: 'order-success', component: OrderSuccessComponent, canActivate : [ AuthGuardService ]},
      { path: 'my/orders', component: MyOrdersComponent, canActivate : [ AuthGuardService ]},

      { path: 'admin/products', component: AdminProductsComponent, canActivate : [ AuthGuardService ]},
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate : [ AuthGuardService ]}
];
...
```


## Step 10 : User Service

```
Run > ng g s services/user/user
```
- add service to app.moudle

```javascript
...
providers: [
    AuthService,
    AuthGuardService,
    UserService
  ],
...
```
- user.service

```javascript
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name : user.displayName,
      email: user.email
    });
  }
}
```
- update app.component

```javascript
import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService, router: Router) {
    auth.user$.subscribe( user => {
      if (user) {
        userService.save(user); // in case, the user update new email and name
        // tslint:disable-next-line:prefer-const
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });

  }
}
```

## Step 11 : AdminAuthGuard Service

```
Run > ng g s services/admin/admin-auth-guard
```
- add service to app.moudle

```javascript
...
providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService
  ],
...
```
- update user.service, add get(uid)

```javascript
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from '../../models/app-user';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name : user.displayName,
      email: user.email
    });
  }

  get(uid: string): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }
}

```

- create new models folder, add new app-user interface under the models folder

```javascript
export interface AppUser {
    name: string;
    email: string;
    isAdmin: boolean;
}

```
- admin-auth-guard

```javascript
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {

    return this.auth.user$
    .switchMap(user => this.userService.get(user.uid))
    .map(appUser => appUser.isAdmin);
  }
}
```

- update routing

```javascript
...
{
  path: 'admin/products',
  component: AdminProductsComponent,
  canActivate : [ AuthGuardService, AdminAuthGuardService ]
},
{
  path: 'admin/orders',
  component: AdminOrdersComponent,
  canActivate : [ AuthGuardService, AdminAuthGuardService  ]
}
...
```

## Step 12 : update services and navbar

- update auth.service

```javascript
...
get appUser$(): Observable<AppUser> {
  
  return this.user$.switchMap(user => this.userService.get(user.uid));
}
...
```

- update admin-auth-guard.service

```javascript
...
canActivate(): Observable<boolean> {

  return this.auth.appUser$.map(appUser => appUser.isAdmin);
}
...
```

- update ng-navbar

```html
...
<li ngbDropdown *ngIf="auth.appUser$ | async as user; else anonymousUser" class="nav-item dropdown">
    <a ngbDropdownToggle class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {{user.name }}
    </a>
    <div ngbDropdownMenu class="dropdown-menu" aria-labelledby="dropdown01">
        <a class="dropdown-item" routerLink="/my/orders">My Orders</a>
        <ng-container *ngIf="user.isAdmin">
            <a class="dropdown-item" routerLink="/admin/orders">Manage Orders</a>
            <a class="dropdown-item" routerLink="/admin/products">Manage Products</a>
        </ng-container>
        <hr/>
        <a class="dropdown-item" (click)="logout()">Log Out</a>
    </div>
</li>
...

NOTE : the switchMap and async may cause the infinit loop issue
```

- update ng-navbar.component

```javascript

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { AppUser } from '../models/app-user';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  appUser: AppUser;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser =>  this.appUser = appUser);
  }

  logout() {
    this.auth.logout();
  }

}
```

- update ng-navbar again with new appUser

```html
...
<li ngbDropdown *ngIf="appUser; else anonymousUser" class="nav-item dropdown">
    <a ngbDropdownToggle class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {{appUser.name }}
    </a>
    <div ngbDropdownMenu class="dropdown-menu" aria-labelledby="dropdown01">
        <a class="dropdown-item" routerLink="/my/orders">My Orders</a>
        <ng-container *ngIf="appUser.isAdmin">
            <a class="dropdown-item" routerLink="/admin/orders">Manage Orders</a>
            <a class="dropdown-item" routerLink="/admin/products">Manage Products</a>
        </ng-container>
        <hr/>
        <a class="dropdown-item" (click)="logout()">Log Out</a>
    </div>
</li>
...
```

- update auth.service again

```javascript
...
get appUser$(): Observable<AppUser> {
    // the switchMap and async may cause the infinit loop issue
    return this.user$.switchMap(user => {
      if (user) {return this.userService.get(user.uid); }

      return Observable.of(null);
    });
...
```

# Secontion 3 : Product Management

## Step 1 : create product-form component

```
Run > ng g c admin/product-form
```

## Step 2 : update admin-product, router

- update admin-product html

```html
<a routerLink="/admin/products/new" class="btn primary">New Products</a>
```

- update router module

```javascript
...
{
  path: 'admin/products/new',
  component: ProductFormComponent,
  canActivate: [AuthGuardService, AdminAuthGuardService]
},
...
```
## Step 3 : create product-form component

- update product-form html

NOTE : [bootstrap input](https://getbootstrap.com/docs/4.0/components/input-group/)

```javascript
<form>
    <div class="form-group">
        <label for="title">Title</label>
        <input id="title" type="text" class="form-control">
    </div>
    <div class="form-group">
         <label for="price">Price</label>
        <div class="input-group">
            <span class="input-group-addon">$</span>
            <input id="price" type="number" class="form-control">
        </div>
    </div>
    <div class="form-group">
        <label for="category">Category</label>
        <select id="category" type="text" class="form-control">
      <option value=""></option>
    </select>
    </div>
    <div class="form-group">
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" class="form-control">
    </div>
    <button class="btn btn-primary">Save</button>
</form>
```

## Step 4 : create category node in firebase

## Step 5 : category service

- create category service
Run > ng g s category

- update app.module
```javascript
...
providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService,
    CategoryService
  ],
...
```
- category.service

```javascript
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    console.log(this.db.list('/categories'));
    return this.db.list('/categories');
  }
}

```
- update product-form component

```javascript
...
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
  }

}
...
```
- update product-from html

```html
...
<div class="form-group">
    <label for="category">Category</label>
    <select id="category" type="text" class="form-control">
        <option value=""></option>
        <option *ngFor="let c of categories$ | async " [value]="c.$key">{{c.name}}</option>
    </select>
</div>
...
```

## Step 6 product form

- update app.module, add FormsModule

```javascript
...
imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
...
```

- update product-form html, add ngModel & ngForm

```html
<form #f="ngForm" (ngSubmit)="save(f.value)">
    <div class="form-group">
        <label for="title">Title</label>
        <input ngModel name="title" id="title" type="text" class="form-control">
    </div>
    <div class="form-group">
        <label for="price">Price</label>
        <div class="input-group">
            <span class="input-group-addon">$</span>
            <input ngModel name="price" id="price" type="number" class="form-control">
        </div>
    </div>
    <div class="form-group">
        <label for="category">Category</label>
        <select ngModel name="category" id="category" type="text" class="form-control">
            <option value=""></option>
            <option *ngFor="let c of categories$ | async " [value]="c.$key">{{c.name}}</option>
        </select>
    </div>
    <div class="form-group">
        <label for="imageUrl">Image Url</label>
        <input ngModel name="imageUrl" id="imageUrl" type="text" class="form-control">
    </div>
    <button class="btn btn-primary">Save</button>
</form>
```

```
NOTE : you may have issue : "There is no directive with “exportAs” set to “ngForm”

You have to import FormsModule into not only the root AppModule, but also into every subModule that uses any angular forms directives.

in our case, we need to add the FormsModule to app-routing.module

// SubModule app-routing.module

import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,//<-- make sure you have added this.
    RouterModule.forRoot(appRoutes)// , { enableTracing: true }) // <-- debugging purposes
  ],
  ....
})
```
- update product-form component, ngForm save(f.value) function

```javascript
...
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
  }

  save(product) {
    console.log(product);
  }

  ngOnInit() {
  }

}
...
```