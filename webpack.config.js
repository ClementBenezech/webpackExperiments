const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


// Hey! I'm the webpack configuration file.

// My job is very important! You see webpack is strong but is not the sharpest knife in the drawer.
// I basically tell webpack how to build a webapp using all the available resources of your project.

// Some might argue i'm a rather simple JS module exporting a configuration object for webpack.
// But they're ignorants. Very little can happen without me.

// My main habitat is the root of web projects repositories, if you're looking for me, start there!

module.exports = {

    /** The famous entrypoint. Here I'm basically telling webpack where to start looking for stuff.
        I usually point to the root of your app, so it can start bundling around. */
    entry: './src/index.js',

    /** Now, I also need to tell him... */
    output: {

        // ...how to name it.
        filename: 'main.js',
        // ...Where to put it. 
        // See how we use path.resolve to generate an absolute Path here. Using a relative path will trigger an error. 
        path: path.resolve(__dirname, 'dist'),
        // ...The mode (TODO)
    },


    plugins: [
        // I use this neat little plugin to generate a index.html file in the Dist Folder, referencing my main.js build.
        // This way, we can open it in the browser and see the build in action.
        new HtmlWebpackPlugin(),
        // This plugin we'll use later, when we want to create a rule that will handle css files separately from JS files
        new MiniCssExtractPlugin() 
    ],

    // The above configuration is the same as the default webpack configuration.
    // With so little information, webpack will be as clever as an educated potato.

    // So next I usually define a set of rules for various types of assets, for webpack to use on each dependency of the project.
    module: {
        // So scanning from the entrypoint, whenever it finds a new dependency, it checks if a rule applies.
        // If not, it will issue an error, asking me for directions on how to handle this specific case.
        rules: [
            {
                // For example here, I'm telling him what to do if a PNG file is imported somewhere in the project.
                // asset/resource mean they will be duplicated in the "build folder" (dist)
                // They will be referenced in the JS bundle, not Included in it. 
                // Meaning essentially you'll get a lighter JS bundle.
                // Good stuff for big files. 
                test: /\.png/,
                type: "asset/resource"
            },
            {
                // Now the downside of asset/resource is that for each file generated as an asset
                // The browser will need to issue an HTTP call to get the resource.
                // So if you have small files like icons or stuff like this
                // They can be bundled INSIDE the JS file wth asset/inline
                test: /\.svg/,
                type: "asset/inline"
            },
            {
                // Or you can just use "asset" which is the general option and let webpack decide between the two modes.
                // Anything smaller than 4KB here (8KB by default) will we bundled inline with the JS. 
                // The rest will be created as files in the "dist" folder. 
                test: /\.gif/,
                type: "asset",
                parser: {
                    // This is where we define what size will be the limit between inline / resource asset modes
                    dataUrlCondition: {
                      maxSize: 4 * 1024,
                    },
                },
            },
            {
                // Here is where i tell webpack how to handle CSS files it finds.
                test: /\.css$/i,
                // I'm applying this rule for all CSS files OUTSIDE the src/components directory.
                exclude: [
                    path.resolve(__dirname, "components")
                ],
                // The css-loader interprets @import and url() like import/require() and will resolve them.
                // Style-loader will Inject CSS into the js bundle directly.
                // Notice this is an array of loaders. They will execute FROM LAST TO FIRST.
                use: ["style-loader", "css-loader"],

            },
            {
                // Now, what if I want to have css in a separate bundle file?
                // Then I'll just use MiniCssExtractPlugin instead of style-loader.
                // This rule is responsible for the main.css file we have in the dist folder.
                test: /\.css$/i,
                // It contains all styles found INSIDE the src/components directory.
                include: [
                    path.resolve(__dirname, "components")
                ],
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
};