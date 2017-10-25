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
