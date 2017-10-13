## Firebase deployment Simple steps 
```javascript
- $ ng build --prod
- $ firebase init
- $ firebase deploy
```

## Install bootstrap4 

- install bootstrap4 

```
Run > npm i --save bootstrap 
```
`NOTE : in my case, the @3.3.7 install, so I need to Run`

```
Run > npm i --save bootstrap@next to get @4.0.0-beta
```

`NOTE` : you may see "npm WARN bootstrap@4.0.0-beta requires a peer of jquery@>=3.0.0 but nonewas installed."

```
"UNMET PEER DEPENDENCY jquery@>=3.0.0" 
"UNMET PEER DEPENDENCY popper.js@^1.11.0"

without install jquery@>=3.0.0 you still can run, but suggest to upgrade it
```

```
Run > npm install jquery
```
- import bootstrap4 to style.css

```
@import '~bootstrap/dist/css/bootstrap.css';
```

- dummy content
```
user http://www.blindtextgenerator.com/lorem-ipsum to help you generate dummy content
```

- embed the media to iframe
```html
<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ONPqeHJShdQ" frameborder="0"></iframe>
</div>
```

## Start with components page : 

`navbar`
https://v4-alpha.getbootstrap.com/components/navbar/


`jumbotron`
https://v4-alpha.getbootstrap.com/components/jumbotron/

`newsletter`

`registerform`

#deploy to firebase
- config on firebase
`copy the configuration to src/environments/enviroment.ts page , ( .prod.ts page also)`
```javascript
export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR API KEY", // <-- your api key
    authDomain: "db2017-9dd94.firebaseapp.com",
    databaseURL: "https://db2017-9dd94.firebaseio.com",
    projectId: "db2017-9dd94",
    storageBucket: "",
    messagingSenderId: "759738631975"
  }
};
```

- install firebase 
```
Run > npm i --save firebase@4.2.0
```


- install angular firebase 
```
Run > npm i --save angularfire2@4.0.0-rc.1
```

- add module to app.module.ts

```javascript
...
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/Auth'
import { environment } from "../environments/environment";
...
```

- modify firebase.json
```json
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
