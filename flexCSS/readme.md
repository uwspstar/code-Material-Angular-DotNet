# Flexbox CSS3

*** use Modernizr to fix the browser issue with flexbox ***

- Recommend watch [CSS Flexbox Tutorial](https://www.youtube.com/watch?v=Y8zMYaD1bz0) by The Net Ninja

### intro
- Flexbox is a css display type design
- Control the position, size and spacing
- responsively

### usage 
- Navigation bars & menus
- Grid layouts
- Bar charts
- Equal height columns

### Basic ( see example2.html)
- apply a display type of tlex to the parent containe 

- Flex Containers
```html
.flex-container {
    display: flex;
    background: #fff;
}
```
- Flex Grow
```html
// can setup as 12 grid column easy
.box-1 {
    background: red;
    flex-grow: 1;
}

.box-2 {
    background: blue;
    flex-grow: 2;
}

.box-3 {
    background: green;
    flex-grow: 3;
}
```
- Flex Shrink ( not use often)
```html
.box {
    height: 100px;
    min-width: 100px;
    
}

.box-1 {
    background: red;
    flex-shrink: 1;
}

.box-2 {
    background: blue;
    flex-shrink: 2;
}
.box-3 {
    background: blue;
    flex-shrink: 3;
}
```

- Flex Wrap
```html

.flex-container {
    display: flex;
    background: #fff;
    flex-wrap:wrap; //flex-wrap:wrap-reverse; 
   
}
```


- Flex Basis 
```html
.flex-container {
        display: flex;
        background: #fff;
        flex-wrap: wrap;
    }
    
    .box {
        height: 100px;
        min-width: 100px;
        flex-basis: 200px;
    }

    // flex : 1 0 200px; means grow 1, shrink 1 and basic is 1
```

- Menu with Flexbox (menu.html)

- Nested Menu with Flexbox (nestmenu.html)



- index.html
```html
...

 <div class="container-1">
        <div class="box-1">
            <h3>Box One</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui aliquid eveniet ut perspiciatis eius eaque veniam quas suscipit! Autem illo qui quidem. Id tempore error doloribus placeat nesciunt. Et ipsam sit ad sapiente dignissimos asperiores
                neque autem a numquam! Rerum iusto autem veritatis quas vero officiis, est voluptatum vel.</p>
        </div>
        <div class="box-2">
            <h3>Box Two</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui aliquid eveniet ut perspiciatis eius eaque veniam quas suscipit! Autem illo qui quidem. Id tempore error doloribus placeat nesciunt. Et ipsam sit ad sapiente dignissimos asperiores
                neque autem a numquam! Rerum iusto autem veritatis quas vero officiis, est voluptatum vel.</p>
        </div>
        <div class="box-3">
            <h3>Box Three</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui aliquid eveniet ut perspiciatis eius eaque veniam quas suscipit! Autem illo qui quidem. Id tempore error doloribus placeat nesciunt. Et ipsam sit ad sapiente dignissimos asperiores
                neque autem a numquam! Rerum iusto autem veritatis quas vero officiis, est voluptatum vel.</p>
        </div>
    </div>

    <div class="container-2">
        <div class="container-2-box-1">
            <h3>Box 4</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui aliquid eveniet ut perspiciatis eius eaque veniam quas suscipit! Autem illo qui quidem. Id tempore error doloribus placeat nesciunt. Et ipsam sit ad sapiente dignissimos asperiores
                neque autem a numquam! Rerum iusto autem veritatis quas vero officiis, est voluptatum vel.</p>
        </div>
        <div class="container-2-box-2">
            <h3>Box 5</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui aliquid eveniet ut perspiciatis eius eaque veniam quas suscipit! Autem illo qui quidem. Id tempore error doloribus placeat nesciunt. Et ipsam sit ad sapiente dignissimos asperiores
                neque autem a numquam! Rerum iusto autem veritatis quas vero officiis, est voluptatum vel.</p>
        </div>
        <div class="container-2-box-3">
            <h3>Box 6</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui aliquid eveniet ut perspiciatis eius eaque veniam quas suscipit! Autem illo qui quidem. Id tempore error doloribus placeat nesciunt. Et ipsam sit ad sapiente dignissimos asperiores
                neque autem a numquam! Rerum iusto autem veritatis quas vero officiis, est voluptatum vel.</p>
        </div>
    </div>

    <div class="container-3">
        <div class="container-3-box-1">
            <h3>Box 7</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui aliquid eveniet ut perspiciatis eius eaque veniam quas suscipit! Autem illo qui quidem. Id tempore error doloribus placeat nesciunt. Et ipsam sit ad sapiente dignissimos asperiores
                neque autem a numquam! Rerum iusto autem veritatis quas vero officiis, est voluptatum vel.</p>
        </div>
        <div class="container-3-box-2">
            <h3>Box 8</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui aliquid eveniet ut perspiciatis eius eaque veniam quas suscipit! Autem illo qui quidem. Id tempore error doloribus placeat nesciunt. Et ipsam sit ad sapiente dignissimos asperiores
                neque autem a numquam! Rerum iusto autem veritatis quas vero officiis, est voluptatum vel.</p>
        </div>
        <div class="container-3-box-3">
            <h3>Box 9</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui aliquid eveniet ut perspiciatis eius eaque veniam quas suscipit! Autem illo qui quidem. Id tempore error doloribus placeat nesciunt. Et ipsam sit ad sapiente dignissimos asperiores
                neque autem a numquam! Rerum iusto autem veritatis quas vero officiis, est voluptatum vel.</p>
        </div>
        <div class="container-3-box-4">
            <h3>Box 10</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui aliquid eveniet ut perspiciatis eius eaque veniam quas suscipit! Autem illo qui quidem. Id tempore error doloribus placeat nesciunt. Et ipsam sit ad sapiente dignissimos asperiores
                neque autem a numquam! Rerum iusto autem veritatis quas vero officiis, est voluptatum vel.</p>
        </div>
        <div class="container-3-box-5">
            <h3>Box 11</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui aliquid eveniet ut perspiciatis eius eaque veniam quas suscipit! Autem illo qui quidem. Id tempore error doloribus placeat nesciunt. Et ipsam sit ad sapiente dignissimos asperiores
                neque autem a numquam! Rerum iusto autem veritatis quas vero officiis, est voluptatum vel.</p>
        </div>
        <div class="container-3-box-6">
            <h3>Box 12</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui aliquid eveniet ut perspiciatis eius eaque veniam quas suscipit! Autem illo qui quidem. Id tempore error doloribus placeat nesciunt. Et ipsam sit ad sapiente dignissimos asperiores
                neque autem a numquam! Rerum iusto autem veritatis quas vero officiis, est voluptatum vel.</p>
        </div>
    </div>
... 

```
- style.css
```html
@media(min-width:760px) {
    .container-1 {
        display: flex;
        /*
            align-items: flex-start; 
            align-items: flex-end;
            align-items: center;
            flex-direction: column;
        */
    }
    .container-2 {
        display: flex;
        /*
            justify-content: flex-start;
            justify-content: flex-end;
            justify-content: center;
    
            justify-content: space-around; 
        */
        justify-content: space-between
    }
}

.container-3 {
    display: flex;
    flex-wrap: wrap;
}

.container-1 div,
.container-2 div,
.container-3 div {
    border: 1px solid #ccc;
    padding: 01rem;
}

.container-2-box-1,
.container-2-box-2,
.container-2-box-3 {
    /* width: 29%; */
    flex-basis: 29%;
}

.container-3-box-1,
.container-3-box-2,
.container-3-box-3,
.container-3-box-4,
.container-3-box-5,
.container-3-box-6 {
    /* width: 15%; */
    flex-basis: 12%;
}

.box-1 {
    flex: 2;
    order: 3;
}

.box-2 {
    flex: 1;
    order: 1;
}

.box-3 {
    flex: 1;
    order: 1;
}
```