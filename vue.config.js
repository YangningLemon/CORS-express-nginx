module.exports = {
	devServer: {
		port: 8001, // dev环境下项目启动端口
		proxy: {
			"/apis": {
				target: "http://localhost:97",
				pathRewrite: {
					'^/apis': ''
				},
				changeOrigin: true
			},
			"/apis2": {
				target: "http://localhost:98",
				pathRewrite: {
					'^/apis2': ''
				},
				changeOrigin: true
			}
		}
	},
	publicPath:'./', //保证打包后能访问到资源
}