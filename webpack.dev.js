const common = require("./webpack.common");
const WebpackMerge = require("webpack-merge");
const path = require("path");

module.exports = WebpackMerge.merge(common,{
    mode: "development",
    target: "web",

    devtool: "inline-source-map",
    devServer:{
        static: "./dist",
        shot: true,
        historyApiFallback: true
    },


    output:{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    }


})