# Functional C#
`Functional programming (often abbreviated FP)` is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. 

### Recommand to read
- [Lambda Calculus - Computerphile](https://www.youtube.com/watch?v=eis11j_iGMs&t=633s)
- [Functional Programming's Y Combinator - Computerphile](https://www.youtube.com/watch?v=9T8A89jgeTI)
- [Haskell Fundamentals](https://app.pluralsight.com/player?course=haskell-fundamentals-part1&author=benson-joeris&name=haskell-fundamentals-part1-m1&clip=0&mode=live)

1. Tamed side Effects 
2. Expression -Based
3. Treat Functions as Data

- OO makes code understandable by encapsulating moving parts.

- FP makes code understandable by minimizing moving parts.


`Functional programming is programming with mathematical functions`

`Mathematical function NOT as same as Class method`

```
- same input - same result
- information about possible input and outcomes
```

`Mathematical Function` 
- Honest : Has precisely defined input and output. 
- Referentially transparent : Doesn't affect or refer to the global state

### Vocabulary

- `Immutability` Inablility to change data
- `State` Data that changes over time. Only mutable class do.
- `Side effect` A change that is made to some state

### C#
- C# 3.0 LiNQ, extension methods
- C# 6.0 Read-only properties
- C# 7.0 Pattern matching


### What is LINQ
`LINQ` is build on functional principles. 
- Generics (LINQ to Object)
- Extesion Methods (LINQ to Object)
- Delegation / Lambda Expressions (LINQ to Object)
- Anonymous Types
- Expression Trees

### Delegation

- allow us to treat functions as types
- MulticastDelegate is : an abstract class which represents one or more methods to be invoked.
- Only the compiler can drive from MulticastDelegate




### Clean Code  (Robert Martin)
- Keep functions small
- Don't repeart yourself
- Do one thing
- Avoid side-effects
- Functions should accpet no more than 3 parameters





### Functional Purity  ( C# is Impure)
- Purely Functional
- Impure

### Satements vs Expressions 

- Expression Composition


### Higher-Order Functions
- Functions which accept other functions
- Functions which return functions

### Favoring Express
- C# is Statement-Based



### Enforcing immutablility
- Guides away from side effects
- Enforces the separation between data and behavior

### Faboring expressions improves
- Maintainability
- Predictability
- Testability
