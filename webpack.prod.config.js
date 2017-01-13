var config = require('./webpack.config');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var plugins = [];
//Remove source maps for production
config.devtool = process.env.NODE_ENV === 'prod' ? null : 'source-map';
//Include the `ExtractTextPlugin` into plugins array
plugins.push(new ExtractTextPlugin('bundle.css'));
//Modify the CSS loader to accomodate `ExtractTextPlugin`
config.module.loaders[1].loader = ExtractTextPlugin.extract('style-loader',
    combineLoaders([{
        loader: 'css-loader',
        query: {
            importLoaders: 1,
            localIdentName: '[hash:base64:5]'
        }
    }, {
        loader: 'postcss-loader'
    }]));
//Add plugins array to config
config.plugins = plugins;
//Export webpack config
module.exports = config;