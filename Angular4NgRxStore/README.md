# Angular4NgRxStore

## What Problem try to solve ?

#### Facebook Chat Problem   - Multiple view models for the same business data
- In user interfaces where we need to display multiple View Models of the same domain data (the Model), how are we going to keep everything in sync?

#### Facebook Chat Problem   - the shared data ownership/data encapsulation problem
## Simplified version of the Facebook chat

#### Facebook Chat Problem   - Avoiding Ajax "spinner" applications

## Solution

#### Store application architecture pattern as a solution to these multiple problems

- "bring more real data to the frontend". What does this mean? This is actually the `core of the store solution`.

`***** It means that instead of transforming the Model into the View Model on the server as its usually done, let's instead copy the Model to the client- side, keep it an in-memory client database and derive View Models last second on the client side instead of doing so upfront on the server. *****`

```javascript

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
```
- `Notice` that Message and Participant are plain POJOs, while Thread contains a property participants which is a map: the key is a
participant Id and the value is the number of unread messages for that participant in that thread.

## Model vs View Model
What we see on the screen is not the Model, its actually the View Model - this is an important difference. Sometimes the View Model has a direct correspondence with the model - but most often they are two different models.

- `Notice` the VM suffix that stands for View Model
- We don't need to use Typescript custom types to define the View Model, but doing so really makes it very clear that its different than the Model.

```javascript
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
```

## What is the View Model similar to?
Continuing the analogy to a SQL database, the 3 custom types above defined as interfaces would correspond to the output of a SQL query that joins 3 tables.
