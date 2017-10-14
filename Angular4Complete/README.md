# Angular4Complete



```javascript

// Install bootstrap
$ npm install --save bootstrap

// modify .angular-cli.json
"styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "styles.css"
],

// create header component
$ ng g c header --dry-run
$ ng g c header

// create recipes component without Unit test
$ ng g c receipes --spec false --dry-run
$ ng g c receipes --spec false

// create recipe-list component without Unit test
$ ng g c receipes/receipt-list --spec false

// create recipe-detail component without Unit test
$ ng g c receipes/receipt-detail --spec false

// create recipe-item component without Unit test
$ ng g c receipes/receipt-list/recipt-item --spec false

// create shopping-list component without Unit test
$ ng g c shopping-list --spec false

// create shopping-edit component without Unit test
$ ng g c shopping-list/shopping-edit --spec false

```