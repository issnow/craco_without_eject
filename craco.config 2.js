const path = require('path');
const { whenProd } = require("@craco/craco");
const CracoLessPlugin = require('craco-less');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  webpack: {
    alias: {
      'ultra-ui/base': path.resolve(__dirname, '../src/ui/base'),
      'util': path.resolve(__dirname, '../src/util'),
      '@component': path.resolve(__dirname, '../src/components'),
      '@baseUI': path.resolve(__dirname, '../src/ui/base'),
      '@page': path.resolve(__dirname, '../src/pages'),
      '@util': path.resolve(__dirname, '../src/util'),
      '@style': path.resolve(__dirname, '../src/styles'),
      '@service': path.resolve(__dirname, '../src/service'),
    },
    
    configure: (webpackConfig, { env, paths }) => ({
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
      },
      devtool: isDev ? 'cheap-module-eval-source-map': 'none',
      plugins: (() => webpackConfig.plugins.map(plugin => {
        if (plugin.constructor.name === 'MiniCssExtractPlugin') {
          plugin.options = {
            ...plugin.options,
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
          }
        }
        return plugin;
      }))(),
      externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        'antd': 'antd',
        'classnames': 'classNames',
        'axios': 'axios',
        'moment': 'moment',
      },
      optimization: (() => {
        // console.log('>>>', webpackConfig.optimization);
        // return webpackConfig.optimization;
        return {
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendors: {
                name: 'vendors',
                test: /[\\/]node_modules[\\/]/,
              },
              default: {
                minChunks: 2,
                reuseExistingChunk: true
              }
            }
          }
        }
      })()
    })
  },
  devServer: {
    // proxy: {
    //   '/psc/HCMDEV/EMPLOYEE/HRMS/s/': 'http://10.179.250.216:8000'
    // },
    proxy: (()=>{
      let obj = {}
      if(isDev) {
        obj['/psc/HCMDEV/EMPLOYEE/HRMS/s/']= 'http://10.179.250.216:8000'
      }
      return obj
    })()
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
