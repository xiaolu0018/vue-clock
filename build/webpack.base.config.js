'use strict'

const path = require('path');
const webpack=require('webpack');

const HtmlwebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    entry: {
        vendor:['vue'],
       index:[
           path.resolve(__dirname,'../src/main.js')
       ]
    },
    output: {
        path: path.resolve(__dirname,'../dist/static'),
        filename: '[name]-[hash:8].js',
        publicPath: "static/"
    },
    resolve: {
        extensions: ['.js','.vue','.json'],
        alias: {
            'vue$':'vue/dist/vue.esm.js',
            '@': path.resolve('src'),
        }
    },
    module: {
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                },
                exclude:/node_modules/
            }
        ]
    },
    // 开启dev source map
    devtool: "cheap-eval-source-map",

    // // 配置plugin
    plugins: [
        // new CleanWebpackPlugin(['build']),
        //模块热替换
        // new webpack.HotModuleReplacementPlugin(),
        //自动生成处理后的html
        new HtmlwebpackPlugin({

            filename: '../index.html',//生成文件名
            template:path.resolve(__dirname,'../index.html'),//模板html路径
            inject:'body',//是否注入和注入的位置（body,head）
            // hash:true,//新文件加hash值
            // cache:true,//文件有变化才生成新的
            // minify: {//是否压缩
            //     removeAttributeQuotes: true // 移除属性的引号
            // }
        }),
        new CommonsChunkPlugin({//提取公共代码和重复引用代码
            name:["common",'vendor'],
            minChunks:2
        })
    ]

}




