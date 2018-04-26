// 一个常见的`webpack`配置文件
const webpack = require('webpack');
const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
    entry: "./docs/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        //publicPath: "" //以后配置静态资源再设置此变量
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，任意的跳转或404响应可以指向 index.html 页面
        inline: true,//设置为true,源文件发生变化时页面自动刷新
        hot: true,
        port: 3333//设置监听端口，默认为8080
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "url-loader?limit=8192",
                exclude: [
                    path.resolve(__dirname, "public/resource/svg")
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader?' + JSON.stringify({
                    name: '[name]',
                    prefixize: true
                }),
                include: [
                    path.resolve(__dirname, './public/resource/svg')
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//启用热替换
        // new webpack.BannerPlugin('版权所有，翻版必究'),
        // new HtmlWebpackPlugin({
        //     template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        // }),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),
        // new ExtractTextPlugin("style.css")
    ],
    resolve: {
        alias: {
            "bim-ui": path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.jsx', '.css']
    },
};
