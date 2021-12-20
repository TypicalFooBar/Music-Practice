const CopyPlugin = require("copy-webpack-plugin");
const path = require('path')

module.exports = {
    entry: './src/js/main.js',
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: './docs'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/html" },
                { from: "src/static" },
                { from: "src/css"}
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // Use the version of Vue that has the template compiler built in
    // so that it can run on the browser without being compiled up front
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}