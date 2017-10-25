# AngularSharingData

### Unrelated Components: via a Service (Common Way)

- DataShareService

```javascript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataShareService {

    private messageSource = new BehaviorSubject<string>('default message');

    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(message: string) {
        this.messageSource.next(message);
    }
}

```

### parent => child via Input()

- ChildComponent

```javascript

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div class="notification is-primary">
  <h1>Child</h1>
  Say {{messageChild}}
  </div>
`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() messageChild: string;
  constructor() { }

  ngOnInit() {
  }

}


```
- ParentComponent

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <h1>Parent</h1>
  <app-child [messageChild]="messageParent"></app-child>
`,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageParent = 'message from parent';

  constructor() { }

  ngOnInit() {
  }

}

```
### Child to Parent: via Output() and EventEmitter , most for (click) event

- ChildComponent
```javascript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div class="notification is-primary">
  <h1>Child</h1>

  Say {{messageChild}}

  </div>

  <button style="border:1px solid red"
  (click)="sendMessage()"
  >Send Message</button>

`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() messageChild: string;


  message = 'message for ementEmitter';

  @Output() messageEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

}
```
- ParentComponent
```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <h1>Parent</h1>
  Message : {{message}}
  <app-child
  [messageChild]="messageParent"
  (messageEvent)="receiveMessage($event)">
  </app-child>
`,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageParent = 'message from parent';

  message = 'message from Child Click';

  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.message = $event;
  }

}

```



### Child to Parent: via ViewChild()




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
