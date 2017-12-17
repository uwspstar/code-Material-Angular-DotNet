# All about Web Development

## my vscode settings.json

```javascript
{
    "workbench.sideBar.location": "right",
    "window.zoomLevel": 2,
    "vsicons.projectDetection.autoReload": true,
    "workbench.iconTheme": "vscode-icons",
    "editor.formatOnSave": true,
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "node_modules": true
    },
    "workbench.colorCustomizations": {
        "terminal.foreground": "#00FD61",
        "terminal.background": "#383737"
    }
}


```
## my vscode Extensions

```javascript
- Angular Material 2, Flex layout 1
- Angular v4 TypeScript Snippets
- ASP.NET Helper
- Auto Import
- Bracket Pair Colorizer
- C#
- C# Extensions
- Docker
- JS-CSS-HTML Formatter
- Move TS
- mssql
- Path Intellisense
- REST Cliet
- TSLint
- TypeScript Hero
- vscode-icons


```

## Angular-cli and Angular Material
```
//remove whole demoMT folder fro MAC
$ rm -R demoMT

// install Angular-cli
$ npm install @angular/cli -g
$ ng -v

// create a new project : project-angular-material
$ ng new project-angular-material --style=scss --routing
$ cd project-angular-material

// install material
$ npm install --save @angular/material @angular/cdk
$ npm install --save @angular/animations

//for moblie
//$ npm install hammerjs
//import 'hamerjs' --in main.ts page

//http://localhost:4200/
$ ng serve

// .angular-cli.json 
"styles": [
  "styles.scss"
]

//styles.css
//@import '~@angular/material/theming';
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import url('//fonts.googleapis.com/icon?family=Material+Icons'); 



@include mat-core();

$primary: mat-palette($mat-lime, 500);
$accent:  mat-palette($mat-lime, 500, A200, A400);
$warn:    mat-palette($mat-red, 500);

$theme: mat-light-theme($primary, $accent, $warn);
@include angular-material-theme($theme);

body {
    font-family: $mat-font-family;
}


```
## Launching from the Command Line
You can also run VS Code from the terminal by typing 'code' after adding it to the path:

- Launch VS Code.
- Open the Command Palette (Ctrl+Shift+P) and type 'shell command' to find the Shell Command: Install 'code' command in PATH command

### TypeScript
- [TypeScript in 5 minutes](https://learnxinyminutes.com/docs/typescript/) by Philippe Vlérick
```
// For collections, there are typed arrays and generic arrays
let list: number[] = [1, 2, 3];
// Alternatively, using the generic array type
let list: Array<number> = [1, 2, 3];

```
```
// For enumerations:
enum Color { Red, Green, Blue };
let c: Color = Color.Green;
```

```
init : (s1:string, n1:number)=>void
= function(s1,n1){
...
// Alternatively,
function init (s1:string, n1:number) : void {
...
}
```

```
// Interfaces can also describe a function type
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// Only the parameters' types are important, names are not important.
let mySearch: SearchFunc;
mySearch = function (src: string, sub: string) {
  return src.search(sub) != -1;
}

```
- [TypeScript in 30 minutes](https://tutorialzine.com/2016/07/learn-typescript-in-30-minutes) by Danny Markov

### Angular
- Version 5.0.0 of Angular Now Available (https://blog.angular.io/version-5-0-0-of-angular-now-available-37e414935ced)
- Angular 5 is coming, What's new [see here](https://www.youtube.com/watch?v=T83qYxlVOBw&feature=youtu.be&t=2411)

- New Animation APIs

```javascript
1. Route Change Animations
2. Query
3. Staggery
4. AnimationBuilder

```

- HttpClient
```javascript
Instead of

http.get(path).map(res=>res.json());
 
Use
 
http.get(paht)
 
or
 
http.get<MyType>(path)
```
- Angular 5
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

### C# 7

- Out Variables
- Local Functions
- Tuples and Deconstruction
- Pattern Matching
- Returning by Reference
- Throwing Expressions
- Improvements to Literals

### CSS Recommend to read 
 
- [Bootstrap 4 ...](https://scotch.io/tutorials/a-look-at-bootstrap-4s-new-reset-rebootcss?utm_source=SitePoint&utm_medium=email&utm_campaign=Versioning) By Nicholas Cerminara 
```
px: Good for consistency, bad for accessibility
em: Good for accessibility, just okay for maintainability / consistency
rem: Good for accessibility, really good for maintainability / consistency

```
- [Simple Explanation Of rem & em CSS Units](https://www.youtube.com/watch?v=H4UtKu11yXg&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=26) By Traversy Media


# Projects list
