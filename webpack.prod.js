const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common,{
    mode: "production",

    output:{
        filename: {
            main:"[name].[contentHash].bundle.js"},
        path: path.resolve(__dirname,"dist")
    },

    optimization:{
        minimizer: [new TerserPlugin(), ]
    },
    
    Plugin:[ 
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(filename:"[name][contentHash].css"),
        new TerserPlugin(),
    ],

    module:{
        rules:[
            {
                test: /\scss$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
        
    }

})