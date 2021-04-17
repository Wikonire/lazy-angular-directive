# LazyAngularDirective

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

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

#Tutorial: 
##IntersectionObserver API
####What is it
The `Intersection Observer API` provides a way to asynchronously observe changes in the intersection of a target element with an anchestor element or with a top-level document's viewport.
####Why it is needed
- Lazy-loading of images or other content as a page is scrolled
- implementing "infinite scrolling" where more and more content is loaded. 
- to calculate ad revenues reporting of visibility of advertisements. 
####What it does
  The `Intersection Observer API` lets code register a callback function that is executed whenever
   - an element they wish to monitor enters  or exists another element (or the viewport) 
   - or when the amount by which the two intersection changes by a requested amount. 
###Intersection observer concepts and usage
It allows you to configure a callback that is called when either of these circumstances occur: 
- A `target` element insersects either teh device's viewport or a specified element. That specified element  is called the `root` element or `root` for the purposes of the Intersection Observer API. 
- The first time the observer is initially asked to watch a target element
#####Creating an intersection observer
~~~~
let options = {
    root: document.querySelect
   or('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}

let observer = new Intersect ionObserver(callback, options)

~~~~
``threshold``: when 100% of the target is visible, within the element specified by te `root` option, the callback is invoked. 
#####Intersection observer options
The ``options`` object let you control the circumstances under which the observer's callback is invoked. It has the following fields: 
- <p><code>root</code> :
    The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified  or if <code>null</code>.</p>
   
- <p><code>rootMargin</code> :
   Margin around the <code>root</code>. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Default to all zeros. 
   </p>
   
- <p><code>threshold</code> :
   A single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed.</p>
   A value of 1.0 means, that the threshold isn't considered passed until every pixel is visible.  
   
