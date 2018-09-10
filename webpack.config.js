const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /js?$/,
                loader: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
        port: 8888,
        open: true,
        overlay: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        })
    ]
}
