# Functional C#

1. Tamed side Effects 
2. Expression -Based
3. Treat Functions as Data

- OO makes code understandable by encapsulating moving parts.

- FP makes code understandable by minimizing moving parts.

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