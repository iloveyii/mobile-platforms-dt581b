const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',             // Location of main js file
    output: {                               // Where the bundle file should be saved
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'               // Content path
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',         // Create this file in output.path
            template: './public/index.html'    // From this template
        })
    ]
};
