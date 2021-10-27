const path = require("path");

// pluing needed to make sure that all output filname updated in index.html
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
        main: "./src/js/index.js",
        vender: "./src/vendor.js",

    },

    Plugin:[
        new HtmlWebpackPlugin({title:"development,"}),
    ],

    module:{
        rules:[,
            {
                test: /\html$/i,
                use:["html-loader"]
            },
            {
                test: /\(svg|gif|png|jpg)/,
                option:{
                    name:"[name].[hash].[ext]",
                    outputPath:"images"
                }
            }
        ]
        
    },

    output:{
        filename:"[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    }   
}