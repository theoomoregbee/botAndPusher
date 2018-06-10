# BotAndPusher

Demonstrating how to build a group chat using [Pusher](https://pusher.com/) with an Angular application. Also build a basic chatbot using the [Dialogflow](https://dialogflow.com) conversation platform formerly know as api.ai by Google.

[View tutorial](https://pusher.com/tutorials/group-chat-angular-dialogflow)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [Download](https://nodejs.org/en/download/) Node and npm 
* [angular cli](https://github.com/angular/angular-cli) `npm install -g @angular/cli`
* `npm install` to install all our node dependencies 


## Development server

* Update [pusher.service.ts](https://github.com/theo4u/botAndPusher/blob/master/src/app/services/pusher.service.ts) to use your own `APP_KEY`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `npm run server` it follows [Twelve-Factor](https://12factor.net/) for handling environment variables listed below
  * `PUSHER_APP_ID`
  * `PUSHER_APP_KEY`
  * `PUSHER_APP_SECRET`
  * `DIALOG_ACCESS_TOKEN`
  
e.g `PUSHER_APP_ID=[appId] node server.js` then `POST http://localhost:2000/message` or `POST http://localhost:2000/join`

or Create a `.env` file with the above variables above, like so
```sh
PUSHER_APP_ID="APP_ID"
PUSHER_APP_KEY="APP_KEY"
PUSHER_APP_SECRET="APP_SECRET"
DIALOG_ACCESS_TOKEN="CLIENT_ACCESS_TOKEN"
```
and run the below in your terminal
```sh 
node server.js
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deployment
Using `gh-pages` to host our angular app. Run `npm run deploy` to build and send to gh-pages  


## Built With

* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
* [Dialogflow](https://dialogflow.com/) - is a conversational UX platform enabling brand unique, natural language interactions for devices, applications, and services
* [Angular](https://angular.io/) - Frontend framework that makes it easy to build  application with the web
* [Express](https://expressjs.com/) - Used for our APIs server
