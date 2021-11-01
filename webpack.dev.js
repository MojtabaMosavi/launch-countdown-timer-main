const common = require("./webpack.common");
const WebpackMerge = require("webpack-merge");
const path = require("path");

module.exports = WebpackMerge.merge(common,{
    mode: "development",
    target: "web",

    devtool: "source-map",
    devServer:{
        static: "./dist",
        hot: true,
        historyApiFallback: true
    },

    stats: "error-only",


    output:{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    }


})