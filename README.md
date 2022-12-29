![Alt text](assets/images/cover.png?raw=true "rendered build image")

# Welcome to webpack for dummies.

## Ever wanted to know what the front "build" process is all about?

I mean, yeah ok, you install packages, you write front end code and shit, it does stuff. 

But for all this to become a web application people can actually use on their browser, there needs to be some kind of transformation process.

Webpack is a Module bundler: it will, kind of, "aggregate" everything in your project, and generates a "build", taking into account dependencies between all the modules.

The build itself consists of one or multiple files containing optimized JS, styles, images etc, generated from you project source.

So wether you are using Vanilla JS and simple CSS, or react components with css in JS and typescript, Webpack will be able to package it into a webapp that any browser can understand.

In other words, as stated in the webpack documentation: 

> Any time one file depends on another, webpack treats this as a dependency. This allows webpack to take non-code assets, such as images or web fonts, and also provide them as dependencies for your application.

> When webpack processes your application, it starts from a list of modules defined on the command line or in its configuration file. Starting from these entry points, webpack recursively builds a dependency graph that includes every module your application needs, then bundles all of those modules into a small number of bundles - often, only one - to be loaded by the browser.

![Alt text](assets/images/webpack.png?raw=true "Some modules beeing bundled very hard")

Basically, you'll just tell webpack where to start looking for stuff to bundle in you app and from this (entry)point it will find all dependencies and integrate them in your build.

To do so, we'll need to create a Webpack configuration file to define "what to do with what file in what case".

And with the help of this repository and the EXTENSIVELY commented webpack configuration file, you can understand, and see for yourself how this all falls into place. 

## How to get started

### First, of course, you'll need to have node.js installed. You can get it here: https://nodejs.org/en/

Then just clone the repo and then install the necessary packages.

They are referenced in the package.json so you just need to run:

yarn install

Or 

npm install.

## What's inside this repo?

The src folder: contains a index file (the root of the "app") importing multiple things.

Also contains a component folder, with (surprise!) some components in it.

The asset folder: contains a directory with all source images.

## Where to start?

I would advise that you read the webpack.config.js first.

It has been thoroughly commented so you understand each option and what it does. 

This should help you understand what webpack does and how we can configure it.

Then

## Execute wepback

Just type npx webpack or yarn webpack

Check the generated files (The build) in the DIST folder (Only appears if you execute webpack)

You can see how each file is bundled according to the rules defined in webpack.config.js

### Try changing stuff, execute webpack again and see how the build is modified !

### To visualize the build as a webpage, and inspect elements, just open whatever_path_to_your_project/dist/index.html with your browser.




# Usefull links

## Asset modules

Allows you to use asset files (fonts, icons, etc) without configuring additional loaders.

https://webpack.js.org/guides/asset-modules/


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

### SASS LOADER

To transform scss files content into regular css.

https://webpack.js.org/loaders/sass-loader/

### Css Minimizer

To make the css file tiny.

https://webpack.js.org/plugins/css-minimizer-webpack-plugin/

### HTML WEBPACK PLUGIN

Creates an index.HTML file pointing to your build. 

https://webpack.js.org/plugins/html-webpack-plugin/#root

### BABEL LOADER

Will translate whatever modern JS syntax into old JS any browser can understand

https://webpack.js.org/loaders/babel-loader/

Documentation on how to specify output.environment to define the behavior of babel loader

https://webpack.js.org/configuration/output/#outputenvironment 


## Other Stuff:

### Babel Documentation

https://babeljs.io/docs/en/






