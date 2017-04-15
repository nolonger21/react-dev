var webpack = require('webpack'),
    config = require('./webpack-prod.config'),
    path = require('path'),
    rootPath = path.resolve(__dirname, '..');

config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

config.devServer = {
        contentBase: rootPath + '/dist',
        inline: true,
        hot:true,
        historyApiFallback: true
};

module.exports = config;