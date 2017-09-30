import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor() { }
}

export interface ThreadSummaryVM {
  id: number;
  participantNames: string;
  lastMessageText: string;
  timestamp: number; read: boolean;
}

export interface MessageVM {
  id: number;
  text: string;
  participantName: string;
  timestamp: number;
}

export interface Thread {
  id: number;
  messageIds: number[];
  participants: { [key: number]: number };
}

export interface Message {

  id: number;
  threadId: number;
  participantId: number;
  text: string;
  timestamp: number;

}

export interface Participant {
  id: number;
  name: string;
}

