var combineLoaders = require('webpack-combine-loaders');

module.exports = {
    entry: __dirname + '/src/app.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }, {
            test: /\.css$/,
            exclude: /(node_modules|bower_components)/,
            loader: combineLoaders([{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                query: {
                    importLoaders: 1,
                    localIdentName: '[local]'
                }
            }, {
                loader: 'postcss-loader'
            }])
        }]
    }
}