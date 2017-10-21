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

`NOTE' *** if you use seperate routing module ( not put the routing under the app.module ) to import all the components in the routing module, you need to put matarial module insdie routing module. ***

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
```
import {MatCheckboxModule} from '@angular/material';
```

- [Radio button](https://material.angular.io/components/radio/api)
```
import {MatRadioModule} from '@angular/material';
```

- [Select](https://material.angular.io/components/select/api)
```
import {MatSelectModule} from '@angular/material';
```
`ngModule is from FormsModule`
```
import {MatSelectModule} from '@angular/material';
```

- [Input](https://material.angular.io/components/input/api)
```
import {MatInputModule} from '@angular/material';
```
- [Input Custom Error Matcher](https://material.angular.io/components/input/overview#custom-error-matcher)

- [Textarea](https://material.angular.io/components/input/api)
```
import {MatInputModule} from '@angular/material';
```

- [Date Picker](https://material.angular.io/components/datepicker/api)
` need to import 'MatNativeDateModule'`
```
import {MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
```
- [Icons](https://material.angular.io/guides)
```
import {MatIconModule} from '@angular/material';
```
- [Buttons](https://material.angular.io/components/button/overview)
```
import {MatButtonModule} from '@angular/material';
```

- [Chips](https://material.angular.io/components/chips/overview)
```
import {MatChipsModule} from '@angular/material';
```


- [Progress spinner](https://material.angular.io/components/progress-spinner/overview)
```
import {MatProgressSpinnerModule} from '@angular/material';
```

- [Tooltop](https://material.angular.io/components/tooltip/api)
```
import {MatTooltipModule} from '@angular/material';
```

- [Tabs](https://material.angular.io/components/tabs/api)
```
import {MatTabsModule} from '@angular/material';
```



## Examples 
```html
```