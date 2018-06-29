var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    plugins: [require('babel-plugin-transform-class-properties')]
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    mode: 'development',
    devtool: 'source-map'
};