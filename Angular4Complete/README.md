# Angular4Complete



```javascript

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

//see http://fontawesome.io/examples/#list

// create header component
$ ng g c header --dry-run
$ ng g c header

// create recipes component without Unit test
$ ng g c recipes --spec false --dry-run
$ ng g c recipes --spec false

// create recipe-list component without Unit test
$ ng g c recipes/recipe-list --spec false

// create recipe-detail component without Unit test
$ ng g c recipes/recipe-detail --spec false

// create recipe-item component without Unit test
$ ng g c recipes/recipe-list/recipe-item --spec false

// create Recipe model in the recipe folder
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}

// create shopping-list component without Unit test
$ ng g c shopping-list --spec false

// create shopping-edit component without Unit test
$ ng g c shopping-list/shopping-edit --spec false

// login
$ ng g c auth/login --spec false

// logout
$ ng g c auth/logout --spec false

// footer
$ ng g c footer --spec false

// create Ingredient model in the shared folder
export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.amount = amount;
        this.name = name;
    }
}
//same as
export class Ingredient {
    constructor(public name: string, public amount: number) {
    }
}


// downlaod Augury for chrom extension to help understand angular project
```