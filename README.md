# Zivver

## Environment

This project was started using [Angular CLI](https://github.com/angular/angular-cli/blob/master/README.md) with some changes listed below.

Inside a project:

- Latest and greatest [Angular v10.1.2](https://angular.io)
- [yarn](https://classic.yarnpkg.com) is used against [npm](https://www.npmjs.com)
- Removed [tslint](https://palantir.github.io/tslint) ([deprecated](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)) added [eslint](https://eslint.org) with [prettier](https://prettier.io)
- Replaced unit tests with [Jest](https://jestjs.io)
- Replaced e2e with [Cypress](https://www.cypress.io) and includes features
- Implemented HMR (hot module replacement)
- Added multilingual support in angular way
- Code style using [prettier](https://prettier.io) and [eslint](https://eslint.org)
- Added git hooks. Before each commit code linting is performed
- Added PWA (can be installed as desktop app)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

## Updating language files

Run `ng xi18n --ivy` to extract any strings from source files and update `src/app/translations/messages.xlf` file

## Code linting

Run `ng lint --fix` to lint and fix possible code style issues.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
