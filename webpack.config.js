const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: {
        //alert: ["./alert.js","./another.js"],
      another: "./another.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 
                    /*"style-loader",*/
                    /*'css-loader'*/
                  ExtractTextPlugin.extract({use:{loader:"css-loader",options:{modules:true,localIdentName:'[local]--[hash:base64:9]'}}})
                
            },
          {
            test: /\.js$/,
            use:{loader:"babel-loader",options:{presets:["es2015","react","stage-1"]}},
            exclude:/node_modules/
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: "./index.html"
            }
        ),
      new ExtractTextPlugin("styles.css"),
      new UglifyJSPlugin()
    ]
};