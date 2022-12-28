const path = require('path');


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
        path: path.resolve(__dirname, 'dist'),
        // ...The mode (TODO)
    },

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
            }
        ]
    }
    
    
};