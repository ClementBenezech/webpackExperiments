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
        // Here I'm telling webpack that the build will have to work in environments not understanding arrow functions
        environment: {
            arrowFunction: false,
        }
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
                      maxSize: 20 * 1024,
                    },
                },
            },
            {
                // For all CSS files we find anywhere but in the src/components folder.
                test: /\.css$/,
                exclude: [path.resolve(__dirname, 'src/components/')],

                // First We resolve imports in the css files using css-loader.
                // Then we insert it in style tags in the main.js bundle, using style-loader.
                use: [
                    "style-loader", // will execute after css-loader
                    "css-loader" // will execute first
                ],
                // IMPORTANT: The loaders are executed from last to first in the "use" array.
            },
            {
                // For all CSS files we find INSIDE the src/components folder.
                test: /\.css$/,
                include: [path.resolve(__dirname, 'src/components/')],

                // We use MiniCssExtractPlugin to generate styles in a separate file in DIST (not in main.js JS like the example above)
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            // Also, we use CSS modules option in css-loader to generate unique classnames for each component.
                            modules: true,
                        },
                    },
            ],
            },
            {
                // Now here, i'm doin something a little bit different and using Babel loader, I tell webpack to "translate" modern JS syntaxes it finds in the code
                // Into "Old school JS" any browser can understand.
                // In the output.environment section above (line 31-ish), I specified that the build should work on JS engines that do not undestand arrow functions.
                // If you look in the main.js file in the dist folder, you'll see all ()=>{doSomething} became function(){doSomething}
                // Change the environment.arrowFunctions property to true, exectue webpack again, you'll see arrow functions coming back in the build :-)
                
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env']
                      }
                    }
              }
           
        ]
    },
};