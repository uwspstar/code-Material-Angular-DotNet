# All about Web Development

### Angular

- Angular 5 is coming, What's new [see here](https://www.youtube.com/watch?v=T83qYxlVOBw&feature=youtu.be&t=2411)

- New Animation APIs

```javascript
1. Route Change Animations
2. Query
3. Staggery
4. AnimationBuilder

```

- HttpClient

Instead of
```javascript
http.get(path).map(res=>res.json());
```
Use
```javascript
http.get(paht)
```
or
```javascript
http.get<MyType>(path)
```

- Schematics

- v5
```javascript
1. Whitespace Removal
2. Build Optimizer
3. Removal of i18n Polyfills
4. Static Injector vs Reflect Polyfill
```

- Faster
```javascript
1. NGC as TypeScript Transform (build time) . the end result is usually 40% faster AOT builds
2. Bundle Size Improvements
```

- Easier to Use
```javascript
1. AOT all of the Time
    a. edit.ng
    b. AOT for Tests
    c. AOT for Development
2. Additional DOM Support for Universal
3. NgUpgradeLite
4. Newi18n pipes
```

- Angular Material Rename

```javascript
md -> mat
```
# Projects list