#install bootstrap4 

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

- go to https://v4-alpha.getbootstrap.com/getting-started/download/#npm

```
Run > npm install bootstrap@4.0.0-alpha.6
```

- Or, use CDN https://v4-alpha.getbootstrap.com/getting-started/download/#bootstrap-cdn


# Demo1

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
