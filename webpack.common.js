const path = require("path");

// pluing needed to make sure that all output filname updated in index.html
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry:["./src/js/main.js","./src/scss/main.scss"],

    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            inject:true,
        }),
        new MiniCssExtractPlugin({filename:"[name][hash].css"}),
    ],

    module:{
        rules:[
            {
                test: /\.html$/i,
                use:["html-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            // process different image type
            {
                test: /\.(svg|gif|png|jpeg|jpg)$/i,
                use: {
                    loader:"file-loader",               
                     options:{
                        filename:"[name][hash].[ext]",
                        outputPath:"",
                    }},

            },

        ]
        
    },

    output:{
        filename:"[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
    }   
}