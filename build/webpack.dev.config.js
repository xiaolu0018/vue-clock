const path = require('path');

const HtmlwebpackPlugin = require('html-webpack-plugin');

const webpack=require('webpack')

var config=require('./webpack.base.config');

config.output.publicPath='/';

config.plugins=[
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),



    new HtmlwebpackPlugin({
        filename: 'index.html',//生成文件名
        template:path.resolve(__dirname,'../index.html'),//模板html路径
        inject:true
    })
]

// var devClient='webpack-hot-middleware/client';

var devClient='./build/dev-client.js';

Object.keys(config.entry).forEach(function (name,i) {
    var extras=[devClient];
    config.entry[name]=extras.concat(config.entry[name])
})


module.exports=config;