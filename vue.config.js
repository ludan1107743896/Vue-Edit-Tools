const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
const path = require('path')
const webpack = require('webpack')
const fs = require('fs')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

function resolve(dir) {
    return path.join(__dirname, dir)
}
const proxyTargetMap = {
    prod: 'https://xxx.xxx.com/',
    randy: 'http://47.105.71.81:3306',
    peter: 'http://192.168.11.178:3001'
}
let proxyTarget = proxyTargetMap[process.env.API_TYPE] || proxyTargetMap.prod
let publicPath = process.env.NODE_ENV === 'production' ? '/' : '/'
let dllPublishPath = '/vendor'
module.exports = {
    publicPath: publicPath,
    outputDir: 'dist',
    lintOnSave: true,
    transpileDependencies: [],
    productionSourceMap: false,
    pages: {
		index: {
			entry: 'src/main.js', // 入口
			template: 'public/engine-h5-long.html', // 模板
			filename: 'index.html' // 输出文件
		}
	},
    chainWebpack: config => {
        config.plugins.delete('prefetch')
        config.module
            .rule('svgIcon')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .tap(options => {
                options = {
                    symbolId: 'icon-[name]'
                }
                return options
            })
        config.resolve.alias
			.set('@', path.resolve('src'))
			.set('@client', path.resolve('src'))
			.set('@plugins', path.resolve('plugins'))
			.set('@server', path.resolve('server'))
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
			.rule('js')
			.include.add(/engine-template/).end()
			.include.add(/src/).end()
			.include.add(/common/).end()
			.use('babel')
			.loader('babel-loader')
			.tap(options => {
				// 修改它的选项...
				return options
			})
    },
    css: {
        extract: true,
        sourceMap: true,
        loaderOptions: {
            sass: {
				// @/ 是 src/ 的别名
				data: fs.readFileSync(path.resolve(__dirname, `./src/common/styles/variables.scss`), 'utf-8') // 公共变量文件注入
			}
        },
        modules: false
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    devServer: {
        disableHostCheck: true,
        open: process.platform === 'darwin',
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        open: true,
        proxy: {
            '/': {
                target: 'http://localhost:4000',//设置你调用的接口域名和端口号 别忘了加http
                ws: false,
                changeOrigin: true, 
                pathRewrite: {},
            }
        },
        before: app => {}
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
                new webpack.DllReferencePlugin({
                    context: process.cwd(),
                    manifest: require('./public/vendor/vendor-manifest.json')
                }),
                // new AddAssetHtmlPlugin({
                //     filepath: path.resolve(__dirname, './public/vendor/*.js'),
                //     publicPath: dllPublishPath,
                //     outputPath: './vendor'
                // }),
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240,
                    minRatio: 0.8
                })
            )
            if (process.env.npm_lifecycle_event === 'analyze') {
                config.plugins.push(new BundleAnalyzerPlugin())
            }
        } else {

        }
    },
    pluginOptions: {}
}
