var webpack = require("webpack")

var HtmlWebpackPlugin = require('html-webpack-plugin')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpackServer = require('webpack-dev-server');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
//module.exports = {
//	//入口文件--主模块
//	entry:'./src/app.js',
//	//出口
//	output:{
//		path:__dirname+'/build',//必须写成绝对路径
////		filename:'app-'+Date.now()+'.js'
////		filename:'app_[hash].js'
//		filename:'app_[hash].js'
//	},
//	devServer:{
//		contentBase:"./build",//本地服务器所加载的页面所在的目录
//		port:9000,
//		host:'localhost',
//		historyApiFallback: true,//不跳转
//  	inline: true//实时刷新
//	},
//	plugins:[
//		new HtmlWebpackPlugin({
//			template:'./src/index.html',
//			filename:'index.html'
//		}),
//		new ExtractTextPlugin({
//			filename:'app-[hash].css',
//			allChunks:true
//		}),
//		new webpack.optimize.UglifyJsPlugin({
//		    
//	        compress: {
//	          warnings: false
//	        }
//	    }),
//	    new webpack.HotModuleReplacementPlugin()//热加载插件
//	],
////	module:{
////		loaders:[
////			{
////				test:/\.css$/,
////				//css-loader:将打包好的js文件里的css代码提出来，=
////				//style-loader：将提出来的css代码整成一个style标签，放入头部
////				//注意：倒着来的
////				loader:'style-loader!css-loader'
////			},
////			{
////				test:/\.scss$/,
////				//css-loader:将打包好的js文件里的css代码提出来，=
////				//style-loader：将提出来的css代码整成一个style标签，放入头部
////				//注意：倒着来的
////				loader:'style-loader!css-loader!sass-loader'
////			},
////			{//将css提出放入一个文件
////				test:/\.css$/,
////				loader:ExtractTextPlugin.extract({
////					fallback:'style-loader',
////					use:'css-loader'
////				})
////			},
////			{
////				test:/\.scss$/,
////				loader:ExtractTextPlugin.extract({
////					fallback:'style-loader',
////					use:'css-loader!sass-loader'
////				})
////			},
////			{//编译jsx
////				test:/\.js$/,
////				loader:'jsx-loader'
////			},
////			{//编译jsx
////				test:/\.js$/,
////				loader:'babel-loader',
////				query:{
////					presets:['es2015','react']
////				}
////			}
////		]
////	}
//	module: {
//      rules: [
//          {
//              test: /(\.jsx|\.js)$/,
//              use: {
//                  loader: "babel-loader",
//                  options: {
//                      presets: [
//                          "es2015", "react"
//                      ]
//                  }
//              },
//              exclude: /node_modules/
//          },
//          {
//              test: /\.css$/,
//              use:ExtractTextPlugin.extract({
//                  fallback:"style-loader",
//                  loader: "style-loader",
//                  use:[
//                  	{
//                      	loader: "css-loader"
////                      	options: {
////                         	 	modules: true
////                      	}
//                  	},
//	                    {
//	                        loader: "postcss-loader"
//	                    }
//                  ]
//              })
//          },
//          
//	        {
//		        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//		        loader: 'url-loader',
//		        options: {
//		          limit: 70000,
//		          name:'img/[name].[hash:7].[ext]'
//		        }
//	      	},
//	      	{
//		　　　　　　test: /\.html$/,
//		　　　　　　loader: 'html-withimg-loader'
//		　　　}
////	      	{
////		        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
////		        loader: 'url-loader',
////		        options: {
////		          limit: 70000,
////		          name:'img/[name].[hash:7].[ext]'
////		        }
////	      	}
//      ]
//  }
//}




module.exports = {
	//入口文件--主模块

	entry:{
		'entryone':'./src/entry_one.js',
		'entrytwo':'./src/entry_two.js',
		'entrythree':'./src/entry_three.js'
	},
	//出口
	output:{
		path:__dirname+'/build',//必须写成绝对路径

		filename:'[name].js'
	},
	devServer:{
		contentBase:"./build",//本地服务器所加载的页面所在的目录
		port:9000,
		host:'localhost',
		historyApiFallback: true,//不跳转
    	inline: true//实时刷新
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html',
			filename:'index.html'
		}),
		
		new ExtractTextPlugin({
			name:'img/[name].css',
			allChunks:true
		}),
		new webpack.optimize.UglifyJsPlugin({		    
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
		   name:['chunk']
		})// 拆分插件

	],

	module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    loader: "style-loader",
                    use:[
                    	{
							loader: "css-loader"
                    	},
	                    {
	                        loader: "postcss-loader"
	                    }
                    ]
                })
            },
            
	        {
		        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 70000,
		          name:'img/[name].[hash:7].[ext]'
		        }
	      	},
	      	{
    　　　　　　test: /\.html$/,
    　　　　　　loader: 'html-withimg-loader'
		　　}
        ]
    }
}