/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const {merge} = require('webpack-merge');
const common = require('./webpack.comman.js');

module.exports = merge(common, {
    mode: 'development',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader'
                    },
                ]
            }
        ]
    }
});