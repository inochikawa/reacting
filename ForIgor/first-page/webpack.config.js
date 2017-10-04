var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})


var BUILD_PATH = __dirname + "/public/app";
var SRC_PATH = __dirname + "/src";

module.exports = {
    entry: [
        'react-hot-loader/patch',
        SRC_PATH + "/index.js"
    ],
    output: {
        path: BUILD_PATH ,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ["react", "es2015"]
                        }
                    }
                ],                
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract('css-loader!sass-loader')
                      
            },
            {
                test: /\.ttf$/,
                exclude: /node_modules/,
                use: "file-loader?name=./fonts/[name].[ext]"                      
            },
            {
                test: /(.png|.jpg|.jpeg|.gif)/,
                exclude: /node_modules/,
                use: "file-loader?name=./images/[name].[ext]"                      
            }
        ]
    },
    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
    
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),
    
        // do not emit compiled assets that include errors
        new webpack.NoEmitOnErrorsPlugin(),

        HtmlWebpackPluginConfig,

        new ExtractTextPlugin('./bundle.css', {
            allChunks: true
        })
    ],

    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
}