# Angular4Auth

```
// install bootstrap
$ npm install --save bootstrap

// modify .angular-cli.json
"styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "styles.css"
],

// install font anwsome Packages 
$ npm install --save font-awesome angular-font-awesome

// import AngularFontAwesomeModule 
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
@NgModule({
  //...
  imports: [
    //...
    AngularFontAwesomeModule
  ],
  //...
})

// modify .angular-cli.json
"styles": [
    //...
    "../node_modules/font-awesome/css/font-awesome.css",
    "styles.css"
],


// jwt
$ npm install angular2-jwt

// use tokenNotExpired();
isLoggedIn() {

        return tokenNotExpired();
        /*
        const jwtHelper = new JwtHelper();
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }

        const expirationDate = jwtHelper.getTokenExpirationDate(token);
        const isExpired = jwtHelper.isTokenExpired(token);

        console.log('token = ' + token);
        console.log('expirationDate = ' + token);
        console.log('isExpired = ' + token);
        return !isExpired;
        */
    }
```