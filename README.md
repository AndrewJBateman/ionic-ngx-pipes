# Ionic ngx pipes

This project uses [ngx pipes](https://www.npmjs.com/package/ngx-pipes) to modify the data shown to the user in the html template.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

"The [ngx pipes](https://www.npmjs.com/package/ngx-pipes) can be used to modify strings, arrays, objects and use math and boolean operations.

## Screenshots

![Example screenshot](./img/ngx-pipes.png)

## Technologies

* [Ionic framework/ v5.6.1](https://ionicframework.com/)

* [Angular CLI v8.0.1](https://cli.angular.io/)

* [Angular framework v8.0.0](https://angular.io/)

* [Ionic/angular v4.4.2](https://www.npmjs.com/package/ionic-angular)

* [ngx pipes v2.5.0](https://www.npmjs.com/package/ngx-pipes)

* [Angular Augery Chrome Extension v1.2.11](https://augury.rangle.io/) useful for debugging.

## Setup

* Run `ionic serve` for a dev server. Navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.

## Code Examples

* `home.page.html` extract showing use of pipes to show array keys and values, date and max value (callPipe function).

```html
<p>{{ myObj | keys }}</p> <!--name,age-->
<p>{{ myObj | values }}</p> <!--Andrew,49-->

<p>Today is {{ today | date }}</p>

<ion-button (click)="callPipe()">Call Pipe</ion-button>
```

```typescript
callPipe() {
    // this.datePipe.transform(Date);
    alert(this.maxPipe.transform(this.numbers));
}
```

## Features

* ngx-pipes has no external dependencies. Pipes are injectable and can be used in Components / Services / etc.

## Status & To-Do List

* Status: Working app that shows off the [ngx pipes](https://www.npmjs.com/package/ngx-pipes) module.

* To-Do: try other pipes, especially the Math pipes.

## Inspiration

* [Ionic Academy: How to Simplify your Ionic 4 App with ngx-Pipes](https://www.youtube.com/watch?v=TaoO9-kkUDY).

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
