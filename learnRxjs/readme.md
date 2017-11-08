- recommend to watch [Getting Started with Reactive Programming Using RxJS](https://app.pluralsight.com/library/courses/reactive-programming-rxjs-getting-started/table-of-contents)

- recommend to read [RxJS Doc](http://reactivex.io/rxjs/)

- recommend to read [RxJS Quick Start With 20 Practical Examples](https://angularfirebase.com/lessons/rxjs-quickstart-with-20-examples/) by Jeff Delaney 

## SUMMARY

 
The essential concepts in RxJS which solve async event management are:
 
- Observable: represents the idea of an invokable collection of future values or events.

- Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.

- Subscription: represents the execution of an Observable, is primarily useful for cancelling the execution.

- Operators: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, flatMap, etc.

- Subject: is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.

- Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

