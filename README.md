# What is this repo?

This is meant as a resource to help you understand how to use webpack and test its behavior. 

Webpack is a Module bundler: it will kindof "agregate" everything in your project, and generate a "build"

It consists of one or multiple files containing optimized JS, styles, images etc, generated from you project source.

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

# Check the generated files (The build) in the DIST folder (Only appears if you execute webpack)

You can see how each file is bundled according to the rules defined in webpack.config.js

# Try changing stuff, execute webpack again and see how the build is modified !


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

https://webpack.js.org/loaders/style-loader/#root


