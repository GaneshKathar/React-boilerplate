/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const {merge} = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.comman.js');

module.exports = merge(common, {
    mode: 'production',
    output:{
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: '/public/images/[name].[hash].[ext]'
                }
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()]
});