# Advanced JavaScript

- Recommend to watch [Advanced JavaScript](https://www.youtube.com/watch?v=UqWN8LXUldc&list=PLvZkOAgBYrsSMNbUiupQpQahsdyjaY6EM) by Tech CBT

### Array

- holds multilpe values
- can hold multiple types of values
```javascript
var ar1 = Array(3);
ar1[0] = "Xing";
ar1[1] = true;
ar1[2] = 88.88;

var ar2 =["xing", true, 888];
```
- "lenght" gives the number of items in array, `.length` is not a function

```javascript
var ar2 = ["xing", true, 888];
//console.log(ar2.length);
//Error : ar2.length();  // ar2.length is not a function
console.log(` ar2.length = ${ar2.length}`);
```