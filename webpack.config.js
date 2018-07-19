const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: './src/EasyModal.jsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	mode: "production",
	module: {
		rules: [
			{
				test: /\.js?x$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|build)/,
				use: 'babel-loader'
			},
			{
				test: /\.s?css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							sourceMap: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins() {
								return [
									autoprefixer('last 2 version')
								];
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	externals: {
		'react': 'commonjs react'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};