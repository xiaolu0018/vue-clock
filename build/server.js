var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.config.js')

var port=8888

var app=express();

var complier=webpack(config);

var devMiddleWare=require('webpack-dev-middleware')(complier,{
    publicPath:config.output.publicPath,
    stats:{
        color:true,
        chunks:false
    }
});

var hotMiddleware=require('webpack-hot-middleware')(complier);

complier.plugin('compilation',function(compilation){
    compilation.plugin('html-webpack-plugin-after-emit',function(data,cb){
        hotMiddleware.publish({action:'reload'});
        cb();
    })
})

app.use(devMiddleWare);
app.use(hotMiddleware);

app.listen(port,function (err) {
    if(err){
        console.log(err);
        return;
    }
    console.log('服务启动，端口号:'+port);
})