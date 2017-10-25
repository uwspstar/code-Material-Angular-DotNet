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
