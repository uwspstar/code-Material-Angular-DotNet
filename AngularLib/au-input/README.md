# AuSvgButton

- install the latest node
[node and npm](https://nodejs.org/en/)
```
```
- install the yarn
```
Run > npm i -g yarn
Run > yarn -g
Run > yarn -v

Run > yarn

Run > npm start
```

- [fontawesome](http://fontawesome.io/icons/)
- [material icons](https://material.io/icons/)

- au-fa-input.component
```
Run > ng g c lib/au-fa-input

```

- @input

`directive input from parent html`--> `directive backend component`--> `directive html`

`@input` value will be input from anywhere is using `directive <au-fa-iput>` to the backend component `class AuFaInputComponent`, the value will be represent as component `html` page of the `directive <au-fa-iput>`

```html
<div class="form-row">
    <label>Email:</label>
    <au-fa-input icon="envelope"></au-fa-input>
</div>

<div class="form-row">
    <label>Password:</label>
    <au-fa-input icon="lock"></au-fa-input>
</div>

<div class="form-row">
    <label>Stripe:</label>
    <au-fa-input icon="cc-stripe"></au-fa-input>
</div>

<div class="form-row">
    <label>Paypal:</label>
    <au-fa-input icon="paypal"></au-fa-input>
</div>
```


```javascript
...
export class AuFaInputComponent implements OnInit {

  @Input()
  icon: string;

  constructor() { }

  ngOnInit() {
  }

  get classes() {
    const cssClasses = {
      'fa': true
    };

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }
}

```

```html
<i [ngClass]="classes"></i>
<input class="normal-input" type="email" name="email" placeholder="E-mail">
```

- style

- ng-content : add the content inside the ng directive 

```html
<au-fa-input icon="envelope">
    <input class="normal-input" type="email" name="email" placeholder="E-mail">
</au-fa-input>
```

- @ContentChild