var express = require('express');

///测试跨域的情况 写给前端 前端部署到nginx，在nginx配置中解决跨域问题

var app7 = express();
app7.get("/", function (req, res) {
    res.send("你好!我是97端口")
})

app7.get("/moxi", function (req, res) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.send("moximoxi!97端口")
})
app7.listen(97)
console.log("97端口启动");

var app8 = express();
app8.get("/", function (req, res) {
    res.send("你好!我是98端口")
})
//会导致前端跨域
app8.get("/moxi", function (req, res) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.send("moximoxi!98端口")
})
app8.listen(98)
console.log("98端口启动");