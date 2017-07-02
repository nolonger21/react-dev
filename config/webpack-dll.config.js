var webpack = require('webpack'),
    path = require('path'),
    rootPath = path.resolve(__dirname, '..');

module.exports = {
    entry: {
        vendors: [
            'react',
            'react-dom',
            'react-router',
            'react-router-dom',
            'redux',
            'react-redux'
        ]
    },
    output: {
        path: rootPath + '/dist',
        filename: '[name].js',
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: __dirname + '/manifest.json',
            name: '[name]',
            context: rootPath
        })
    ]
}