# AngularChatbotWithDialogflow
*** Google has changed `API.AI` to `Dialogflow` ***

- Recommend to watch [Angular Chatbot with Dialogflow (API.ai)](https://www.youtube.com/watch?v=CKhV7-NF2OI) by Jeff Delaney

[source code see details](https://angularfirebase.com/lessons/chatbot-in-angular-with-dialogflow-api-ai/)

- [dialogflow sign up](https://console.dialogflow.com/api-client/#/newAgent)

- Initial Setup

```javascript
$ ng new AngularChatbotWithDialogflow

$ cd AngularChatbotWithDialogflow

$ npm install api-ai-javascript -D

```

- update .angular-cli.json , remove "app" prefix and update style.scss

```javascript
...
"prefix": "",
"styles": [
    "styles.scss"
],
...
```
- create chat module
```javascript 
$ ng g module chat
$ ng g service chat/chat - m chat
$ ng g component chat/chat-dialog - m chat
```

- Client access token , read only client key
```javascript
export const environment = {
  production: false,
  dialogflow: {
    angularBot: '<you_client_key>'
  }
};

```
- update chat.module.ts
- update chat-dialog.module.ts

## Angular setup
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
