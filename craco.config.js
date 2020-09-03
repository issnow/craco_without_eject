/**  
 * 教你不用eject的情况下,配置webpack,使用到craco
 * yarn add @craco/craco craco-less @babel/plugin-proposal-decorators -D
 * yarn add babel-plugin-import​​​​​​​ -D
 */
const CracoLessPlugin = require('craco-less')
const path = require('path')
const pathResolve = pathUrl => path.resolve(__dirname, pathUrl)
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  // 关闭eslint
  eslint: {
    enable: false,// 禁用eslint
    mode: 'file'
    // enable: true /* (default value) */,
    // mode: "extends" /* (default value) */ || "file",
    // configure: { /* Any eslint configuration options: https://eslint.org/docs/user-guide/configuring */ },
    // configure: (eslintConfig, { env, paths }) => { return eslintConfig; },
    // loaderOptions: { /* Any eslint-loader configuration options: https://github.com/webpack-contrib/eslint-loader. */ },
    // loaderOptions: (eslintOptions, { env, paths }) => { return eslintOptions; }
  },
  webpack: {
    // 在这里配置别名
    alias: {
      '@': pathResolve('src'),
      '@page': pathResolve('src/page'),
      '@component': pathResolve('src/component'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils'),
      '@service': pathResolve('src/service')
    },
    // 也可以在这里配置plugin
    plugins: [
      // new BundleAnalyzerPlugin(),
    ],
    configure: webpackConfig => {
      // !在这里集中配置webapck
      // webpackConfig.module.rules.push({
      //   test: /\.jsx?$/,
      //   use: ['babel-loader']
      // })
      // webpackConfig.module.rules.push({
      //   test: /\.less$/,
      //   use: ['babel-loader']
      // })
      if (process.env.NODE_ENV === 'development') {
        // 配置source_map
        webpackConfig.devtool = 'cheap-module-eval-source-map';
        let plugins = [
          // 可视化查看bundle的体积
          new BundleAnalyzerPlugin(),
          //热更新插件,和devserver中的hot:true搭配使用
          // new webpack.HotModuleReplacementPlugin(),
        ]
        webpackConfig.plugins.push(...plugins)
      }
      if(process.env.NODE_ENV === 'production') {
        // cra已经默认压缩css和js了,不用再下载额外的plugin
        // 关闭source map
        webpackConfig.devtool = false;
        // webpackConfig.devtool = 'none';
        // 配置打包后的文件位置
        // config.output.path = path.resolve(__dirname, 'dist');
        // config.output.publicPath = './demo';
        webpackConfig.plugins.push(
          new CleanWebpackPlugin(),
        ) 
      }
      return webpackConfig
    }
  },
  babel: {
    // antd按需加载
    plugins: [
      ['import', {
        libraryName: 'antd',
        style: true
      }],
      ['@babel/plugin-proposal-decorators', {
        legacy: true
      }]
    ]
  },
  plugins: [{
    // 使用less-loader,想看更多的craco-less配置,请移步官方文档https://github.com/DocSpring/craco-less
    plugin: CracoLessPlugin,
    options: {
      lessLoaderOptions: {
        lessOptions: {
          // modifyVars: {},
          // ?注意:设置这个参数,防止antd报错,为什么添加这个参数,请看官网http://lesscss.org/usage/#less-options
          // False by default starting in v3.0.0. Enables evaluation of JavaScript inline in .less files. This created a security problem for some developers who didn't expect user input for style sheets to have executable code.
          javascriptEnabled: true
        }
      }
    }
  }],
  // devserver,主要配置代理
  devServer: (devServerConfig) => {
    // devServerConfig.port = 5000
    // return devServerConfig;
    return {
      ...devServerConfig,
      // port: 5000,
      // open: true,
      // overlay: false,
      proxy: {
        "/api": {
          target: "http://localhost:6000",
          // pathRewrite: {"^/api" : ""}
        },
        '/get': {
          target: 'http://localhost:6000',
          pathRewrite: {
            '^/get': ''
          }
        }
      }
    }
  },
}