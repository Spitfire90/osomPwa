# OsomPwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Application details
Angular CLI 7
PWA support
ng add @angular/pwa --project <name of project as in angular.json>
https://blog.angular-university.io/angular-service-worker/

To launch PWA, we need this server (ng service does not work with ServiceWorkers) - First install http-server
> npm install -g http-server

> ng build --prod
Run PWA (without cache)
http-server -p 8080 -c-1 dist/osom-pwa

Material Design - Add from CLI:
ng add @angular/material
setup with HammeJS for gesture recognition + browser animations

Generation of the app-nav:
ng generate @angular/material:material-nav --name app-nav

Add ngx-scanner lib: npm i @zxing/ngx-scanner@latest --save

Install oAuth2 OpenId library
npm i angular-oauth2-oidc --save

Generate Guard
ng g guard
Need to be register into app module as provider manually

Add LocalStorage package (should support IndexedDB)
npm install @ngx-pwa/local-storage@7

# Debug with Chrome DevTools and remote Android device
see https://stackoverflow.com/questions/21925992/chrome-devtools-devices-does-not-detect-device-when-plugged-in

For ADB, we can use the single ADB package https://forum.xda-developers.com/showthread.php?t=2317790)
Run `adb devices` to start the ADB demon


Deploy GH Pages
ng build --prod --base-href "https://Spitfire90.github.io/osomPwa/"
npx ngh --dir=dist/osom-pwa


Add online-status service to be notified when offline/online
Add SwUpdate subcription to be notified when new version is available

# Generating SSH Key + add to ssh agent
https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
Location: C:\Users\nanto\.ssh