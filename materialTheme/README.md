# MaterialTheme

- Angular Material install
```javascript
$ npm install --save @angular/material @angular/cdk

// animations
$ npm install --save @angular/animations

// hammerjs (mat-slide-toggle, mat-slider, matTooltip) rely on HammerJS
$ npm install --save hammerjs

```

- update styles.css: 
```javascript
@import "~@angular/material/prebuilt-themes/indigo-pink.css"

@import "https://fonts.googleapis.com/icon?family=Material+Icons"
```
- update app.module.ts
```javascript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule //If you don't want to add another dependency to your project, you can use the NoopAnimationsModule
],
  ...
})

```
- Separate NgModule that imports all of the Angular Material components

*** if you use seperate routing module ( not put the routing under the app.module ) to import all the components in the routing module, you need to put matarial module insdie routing module. ***

```javascript

import {MatRadioModule, MatCheckboxModule} from '@angular/material'; 

@NgModule({
  imports: [MatRadioModule, MatCheckboxModule],
  exports: [MatRadioModule, MatCheckboxModule],
})
export class MaterialModule { }

```

- under the src folder, create theme.scss file.

- modify .angular.cli.json
```javascript
...
"styles": [
    "styles.css",
    "theme.scss"
],
...
```

- import anthor.scss (order is important), into the theme.scss

- udpate theme.scss
```javascript
//add theming
@import '~@angular/material/_theming';

//add mat-core
@include mat-core();

// set paletter
$app-primary: mat-palette($mat-blue, 100);
$app-accent: mat-palette($mat-yellow, 700);
$app-warn: mat-palette($mat-red);

// set light theme
$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);

// use theme for angular
@include angular-material-theme($app-theme);

```

- using dark theme modify theme.scss

```javascript
//$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn);
$app-theme: mat-dark-theme($app-primary, $app-accent, $app-warn);


...
<body class='mat-app-background'> ...
```

- [Angular Material typography](https://material.angular.io/guide/typography)

```javascript
<body class='mat-app-background mat-typography'>...
```

## Angular Setup
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
