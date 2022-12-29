# What is this repo?

This is meant as a resource to help you understand how to use webpack and test its behavior. 

Webpack is a Module bundler: it will kindof "agregate" everything in your project, and generate a "build"

It consists of one or multiple files containing optimized JS, styles, images etc, generated from you project source.

So wether you are using Vanilla JS and simple CSS or react components with css in JS and typescript, Webpack will be able to package it into a webapp that any browser can understand.

Basically, you'll just tell webpack where to start looking for stuff to bundle in you app and from this (entry)point it will find all dependencies and integrate them in your build.

To do so, you'll need to create a Webpack configuration file to define "what to do with what file in what case".

In other words, as stated in the webpack documentation: 

> Any time one file depends on another, webpack treats this as a dependency. This allows webpack to take non-code assets, such as images or web fonts, and also provide them as dependencies for your application.

When webpack processes your application, it starts from a list of modules defined on the command line or in its configuration file. Starting from these entry points, webpack recursively builds a dependency graph that includes every module your application needs, then bundles all of those modules into a small number of bundles - often, only one - to be loaded by the browser.

# How to get started

Just clone the repo and then install the necessary packages.

They are referenced in the package.json so you just need to run:

yarn install

Or 

npm install.

# What's inside this repo?

The src folder: contains a JS file (the root of the "app") importing multiple things.
Also contains a component folder, with (surprise!) some components in it
The asset folder: contains a directory with all source images.

# Where to start?

I would advise that you read the webpack.config.js first.

It has been thoroughly commented so you understand each option and what it does. 

This should help you understand what webpack does and how we can configure it.

Then

# Execute wepback

Just type npx webpack or yarn webpack

Check the generated files (The build) in the DIST folder (Only appears if you execute webpack)

You can see how each file is bundled according to the rules defined in webpack.config.js

## Try changing stuff, execute webpack again and see how the build is modified !


# Usefull links

## Webpack Plugins

### HTML WEBPACK PLUGIN

To create a index.html page in the build folder

https://webpack.js.org/plugins/html-webpack-plugin/

### CSS LOADER

The css-loader interprets @import and url() like import/require() and will resolve them

https://webpack.js.org/loaders/css-loader/

### MINI CSS EXTRACT PLUGIN

To extract css in a separate main.css file.

https://webpack.js.org/plugins/mini-css-extract-plugin/#root

### STYLE-LOADER

To bundle css directly in the main.js bundle file

https://webpack.js.org/loaders/style-loader/#rootadd .

### HTML WEBPACK PLUGIN

Creates an index.HTML file pointing to your build. 

https://webpack.js.org/plugins/html-webpack-plugin/#root



