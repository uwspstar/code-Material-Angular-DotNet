
/*
var count = 0;
var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click').subscribe(() => console.log(`clicked ${++count} times`));
*/

var count = 0;
var button = document.querySelector('button');
// 1. create source
var source = Rx.Observable.fromEvent(button, 'click');
// 2. set observer
var observer = () => console.log(`clicked ${++count} times`);
// 3. subscribe
source.subscribe(observer);


// 1. Create Observables - Define the stream

const observable = Rx.Observable.create(observer => {
    observer.next('hello')
    observer.next('world')
})
observable.subscribe(val => console.log(val))
// hello
// world

// 2. create an observable from mouse clicks
const clicks = Rx.Observable.fromEvent(document, 'click')
clicks.subscribe(click => console.log(click))
// click around the web page...
// MouseEvent<data>
// MouseEvent<data>


// 3 .convert a promise to an observable with fromPromise()
// You can also convert an observable right back to a promise using the toPromise() method.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved!')
    }, 1000)
});
const obsvPromise = Rx.Observable.fromPromise(promise)
obsvPromise.subscribe(result => console.log("result is :" + result))
// wail 1 second...
// resolved!