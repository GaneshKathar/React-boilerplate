// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"]},
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./public/index.html"}) // to load template
    ]
}