var path = require('path');
var webpack = require('webpack');
/*
extract-text-webpack-plugin插件，
有了它就可以将你的样式提取到单独的css文件里，
妈妈再也不用担心样式会被打包到js文件里了。
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
/*
html-webpack-plugin插件，重中之重，webpack中生成HTML的插件，
具体可以去这里查看https://www.npmjs.com/package/html-webpack-plugin
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var args = require('yargs').argv;
// 命令行传入的环境参数
// 可通过--prod,--mock传入
var isProd = args.prod;
var isMock = args.mock;

var entryJs = {
	entry: ['./src/js/page/entry.jsx']

};
// 通用抽离模块 ，最后和抽离的公共模块合并
//entryJs['common'] = [
//	// 3rd dependencies
//	'./src/js/lib/bootstrap/bootstrap.js'
//];

//第三方模块不需要bundle,直接在文件按顺序引用
module.exports = {

	entry: entryJs,
	devtool: 'source-map',
	//externals: {
	//	'react': 'react',
	//	'jquery': 'jquery',
	//	'react-dom': 'react-dom',
	//	'bootstrap': 'bootstrap',
	//	'react-router':'react-router'
	//},
	//externals: {
	//	'jquery': 'jQuery',
	//},
	output: { 
		path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
		publicPath: 'dist/',				//模板、样式、脚本、图片等资源对应的server上的路径
		filename: 'js/[name].js',			//每个页面对应的主js的生成配置
		chunkFilename: 'js/[id].chunk.js',   //chunk生成的配置
		//libraryTarget: "umd",
		//library: "Menu"
	},

	module: {
		loaders: [ //加载器，关于各个加载器的参数配置，可自行搜索之。
			{
				test: /\.css$/,
				//配置css的抽取器、加载器。'-loader'可以省去
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader') 
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.less$/,
				//配置less的抽取器、加载器。中间!有必要解释一下，
				//根据从右到左的顺序依次调用less、css加载器，前一个的输出是后一个的输入
				//你也可以开发自己的loader哟。有关loader的写法可自行谷歌之。
				loader: ExtractTextPlugin.extract('css!less')
			}, {
				//html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
				//比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
				test: /\.html$/,
				loader: "html?attrs=img:src img:data-src"
			}, {
				//文件加载器，处理文件静态资源
				test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader?name=./font/[name].[ext]'
			}, {
				//图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
				//如下配置，将小于8192byte的图片转成base64码
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
			},
			{
				test: require.resolve('jquery'),
				loader: 'expose-loader?jQuery'
			},
			{
				test: /\.jsx?$/,
				loader: 'babel'
			}
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		//new webpack.optimize.CommonsChunkPlugin({
		//	name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
		//	chunks: ['home', 'main'],
		//	minChunks:2
		//}
		//),
		//new webpack.optimize.UglifyJsPlugin({
		//	compress: {
		//		warnings: false
		//	}
		//}),
		new ExtractTextPlugin('css/[name].[hash].css'), //单独使用link标签加载css并设置路径，相对于output配置中的publickPath
		//HtmlWebpackPlugin，模板生成相关的配置，每个对于一个页面的配置，有几个写几个
		new webpack.DllReferencePlugin({       // 敲黑板，这里是重点
			context: __dirname,                  // 同那个dll配置的路径保持一致
			manifest: require('./config/manifest.json') // manifest的缓存信息
		}),
		new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
			favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
			filename: '../index.html', //生成的html存放路径，相对于path
			template: './index.html', //html模板路径
			inject: 'body', //js插入的位置，true/'head'/'body'/false
			hash: true, //为静态资源生成hash值
			chunks: ['entry'],//需要引入的chunk，不配置就会引入所有页面的资源
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: false //删除空白符与换行符
			}
		}),
		new webpack.HotModuleReplacementPlugin() //热加载
	],
	//使用webpack-dev-server，提高开发效率
	devServer: {
		contentBase: './',
		host: 'localhost',
		port: 9090,
		inline: true,
		hot: true,
	}
};