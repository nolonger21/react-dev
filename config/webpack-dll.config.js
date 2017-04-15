var webpack = require('webpack'),
    path = require('path'),
    rootPath = path.resolve(__dirname, '..');

module.exports = {
    entry: {
        vendors: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: rootPath + '/dist',
        filename: '[name].js',
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        })
    ]
}