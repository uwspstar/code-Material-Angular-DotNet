# Material

- [Angular material 2 Getting Started](https://github.com/angular/material2/blob/master/guides/getting-started.md)

- Recommad to watch [Angular Material ](https://www.youtube.com/watch?v=wPT3K3w6JtU) by Mosh

```javascript
$ npm install --save @angular/material @angular/cdk

// animations
$ npm install --save @angular/animations

// hammerjs (mat-slide-toggle, mat-slider, matTooltip) rely on HammerJS
$ npm install --save hammerjs
```
- update styles.css:
```html
@import "~@angular/material/prebuilt-themes/indigo-pink.css"
```

- Material Design Icons, load the icon font in your index.html.
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

 or, put it inside the style.css

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
```html
import {MatRadioModule, MatCheckboxModule} from '@angular/material'; 

@NgModule({
  imports: [MatRadioModule, MatCheckboxModule],
  exports: [MatRadioModule, MatCheckboxModule],
})
export class MyModule { }
```
- [Checkbox](https://material.angular.io/components/checkbox/api)
`MatCheckbox : old version use md-checkbox, the new version use mat-checkbox`

- [Radio button](https://material.angular.io/components/radio/api)

- [Select](https://material.angular.io/components/select/api)

`ngModule is from FormsModule`

- [Input](https://material.angular.io/components/input/api)
- [Input Custom Error Matcher](https://material.angular.io/components/input/overview#custom-error-matcher)

- [Textarea](https://material.angular.io/components/input/api)

- [Date Picker](https://material.angular.io/components/datepicker/api)
` need to import 'MatNativeDateModule'`

- [Icons](https://material.angular.io/guides)
- [Buttons](https://material.angular.io/components/button/overview)
- [Chips](https://material.angular.io/components/chips/overview)
- [Progress spinner](https://material.angular.io/components/progress-spinner/overview)

## Examples 
```html
```