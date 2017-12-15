# Cssgrid

# Recommend to read

- [Learn CSS Grid in 5 Minutes](https://medium.freecodecamp.org/learn-css-grid-in-5-minutes-f582e87b1228) by Per Harald Borgen
- [How to make your HTML responsive by adding a single line of CSS](https://medium.freecodecamp.org/how-to-make-your-html-responsive-by-adding-a-single-line-of-css-2a62de81e431)  by Per Harald Borgen

- image fit

```javascript

<div class="container">
  <div><img src="img/1.jpg"/></div>
  <div><img src="img/2.jpg"/></div>
  <div><img src="img/3.jpg"/></div>
  <div><img src="img/4.jpg"/></div>
  <div><img src="img/5.jpg"/></div>
</div>


div { 
    border:2px solid red;
    margin: 5px;
    text-align: center;
    content: auto;

}
.container{
    display: grid;
    /*grid-template-columns : 100px 100px 100px;*/
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 100px 300px;

}


.container > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

```

- repeat()
```javascript
.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 50px);
}
```
- auto-fit()

```javascript
.container {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-template-rows: repeat(2, 100px);
}
```

# base setup

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
