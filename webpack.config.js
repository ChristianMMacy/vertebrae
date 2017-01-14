var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry  : "./index.js",
	output : {
		path     : __dirname,
		filename : "bundle.js"
	},
	module : {
		loaders : [
			{
				test    : /\.js$/,
				exclude : /(node_modules|bower_components)/,
				loader  : 'babel-loader',
				query   : {
					presets : [ 'es2015' ]
				}
			},
			{ test : /\.hbs$/, loader : "handlebars-loader" },
			{ test : /\.css$/, loader : "style-loader!css-loader" }
		]
	},
	plugins: [
		HtmlWebpackPluginConfig
	],
	devServer: {
		port: 3000,
		historyApiFallback: true
	}
	
};