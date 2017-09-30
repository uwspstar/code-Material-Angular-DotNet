# LearnTypeScript

``` javascript
let user = {};
user.name = 'xing';

Property 'name' does not existon type '{}'.
```

```javascript
let user: any = {};
    user.name = 'Mooooo';
```
- By assigning the type Any to the user variable, we can now assign it any property we need, because that is how the Any type works. 

- Another thing about the Any type is that we could take the variable user and also assign it to anything.

- So annotating a variable with type Any is essentially telling the compiler to bypass the type system, and in general not check type compatibility for this variable.

- *** It's better to try to use Any the least possible, to keep all the benefits of the type system intact.

``` javascript
let course = {
  name: 'Components'
};

course.name = 'Components and Directives';
course.lessonCount = 20;

Property 'lessonCount' does not exist on type '{ name: string; }'
```

- We can see that the variable course is not of type Any, it got a di erent type assigned
- The type inferred looks like it's the one of an object that has only one property named `name'?
- We can set new values to this property called name
but we cannot assign any other variable to a variable of this
type



``` javascript
interface Course {
      name: string;
      
    }
    // tslint:disable-next-line:prefer-const
    let course: Course = {

      name: 'Components'
    };

    course.name = 'Components and Directives';
```
- In Typescript the interface keyword is not just an object oriented concept, it has been generalized to include objects also:


``` javascript
interface Course {
      name: string;
      lessonCount: number;
    }

    interface Named {
      name: string;
    }

    // tslint:disable-next-line:prefer-const
    let named: Named = {
      name: 'Name goes here'
    };

    // tslint:disable-next-line:prefer-const
    let course: Course = {
      name: 'Components',
      lessonCount: 1
    };

    named = course;
    course = named; // Error

```
```
Named' is not assignable to type 'Course'. Property 'lessonCount' is missing in type 'Named'.

```javascript
interface Course {
      name: string;
      lessonCount?: number;
    }

```
- Another way of fixing this type of errors is to mark variables as optional, for example by annotating variables with a question mark:

- So as we can see at this point, although the Typescript Type System looks very familiar to developers coming from other languages at first, its actually designed in a fundamentally different way.

