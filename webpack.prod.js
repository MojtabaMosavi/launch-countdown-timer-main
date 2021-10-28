const common = require("./webpack.common");
const WebpackMerge = require("webpack-merge");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = WebpackMerge.merge(common,{
    mode: "production",

    output:{
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname,"dist")
    },

    optimization:{
        minimizer: [new TerserPlugin(), ]
    },

    plugins:[ 
        new TerserPlugin(),
    ],

    output:{
        clean: true,
    }

})