const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
    entry:{
        main:["./src/js/main","./src/scss/main.scss"]
    },

    plugins:[
        new HtmlWebpackPlugin({template:"./src/index.html",inject:true,}),
        new MiniCssExtractPlugin({filename:"[name][hash].css"}),
        new webpack.HotModuleReplacementPlugin(),
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
        publicPath: "/",
    }   
}