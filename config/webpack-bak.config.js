var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path'),
    rootPath = path.resolve(__dirname, '..');
    appPath = '/app-zhihu/';

module.exports = {
    entry:  {
        bundle:rootPath + appPath + 'main.js'
    },
    output: {
        path: rootPath + '/dist',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [
            {  
                test: /\.(js|jsx)$/,
                loader:'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|styl)$/,
                loader:'style-loader!css-loader?modules&localIdentName=[hash:base64:5]!postcss-loader!stylus-loader'
            },
    　　　　{
    　　　　　　test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
    　　　　　　loader: 'url-loader?limit=1024&name=images/[name].[ext]'
    　　　　},
    　　　　{
    　　　　　　test: /\.html$/,
    　　　　　　loader: 'html-withimg-loader'
    　　　　}
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
         options: {
           postcss: require('autoprefixer')
         }
        }),
        new webpack.BannerPlugin('Copyright lee inc.'),
        new htmlWebpackPlugin({
            template: 'html-withimg-loader!' + rootPath + appPath + 'index.html',
            filename: rootPath + '/dist/index.html',
            inject:false,
            hash:false,
            minify: {
                "removeAtstributeQuotes": true,
                "removeComments": true,
                "removeEmptyAttributes": true
            }
        }),
        new webpack.DllReferencePlugin({
            context: rootPath,
            manifest: __dirname + '/manifest.json'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: rootPath + '/dist',
        inline: true,
        hot:true,
        historyApiFallback: true
    }
}