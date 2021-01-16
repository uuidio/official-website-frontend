// const path = require('path')
// const webpack = require('webpack')
// const resolve = dir => path.join(__dirname, dir)
// // const { proxy_address } = require('./src/config/index')
// const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// module.exports = {
//     lintOnSave: true, // 是否保存时修复代码
//     chainWebpack: config => {
//     // 移除预加载模块
//         config.plugins.delete('prefetch') // 移除 prefetch 插件
//         config.plugins.delete('preload') // 移除 preload 插件
//         // 配置路径
//         config.resolve.alias
//             .set('@', resolve('src'))
//             .set('_c', resolve('src/components'))
//             .set('~', resolve('src/assets'))
//         // 包分析模块
//         if (process.env.use_analyzer) {
//             config
//                 .plugin('webpack-bundle-analyzer')
//                 .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
//         }
//     },
//     // 打包时不生成.map文件
//     productionSourceMap: false,
//     // 代理设置
//     devServer: {
//         port: 9999,
//         // open: true,
//         // 代理
//         proxy: {
//             '/api': {
//                 // 目标 API 地址
//                 target: proxy_address.api,
//                 // 将主机标头的原点更改为目标URL
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/apis': ''
//                 }
//             },
//             '/webApi': {
//                 // 目标 API 地址
//                 target: proxy_address.webapi,
//                 // 将主机标头的原点更改为目标URL
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/webApi': ''
//                 }
//             }
//         }
//
//     },
//     // 全局变量
//     configureWebpack: {
//         externals: {
//             // 'vue': 'Vue',
//             // 'element-ui': 'ELEMENT',
//             $: 'jquery',
//             jQuery: 'jquery',
//             'windows.jQuery': 'jquery',
//             AMap: 'AMap'
//         },
//         plugins: [
//             new webpack.ProvidePlugin({
//                 $: 'jquery',
//                 jQuery: 'jquery',
//                 'windows.jQuery': 'jquery',
//             })
//         ]
//     }
//     // css配置
// }

const path = require('path')
const webpack = require('webpack')
const resolve = dir => path.join(__dirname, dir)
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
module.exports = {
  assetsDir: 'assets',
  lintOnSave: true, // 是否保存时修复代码
  chainWebpack: config => {
    // 配置路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('*', resolve('src/assets/image'))
  },
  configureWebpack: config => {
    return {
      externals: {
        // 'vue': 'Vue',
        // 'element-ui': 'ELEMENT',
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',
      },
      plugins: [
        new PrerenderSPAPlugin({
          // 生成文件的路径，也可以与webpakc打包的一致。
          // 下面这句话非常重要！！！
          // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
          staticDir: path.join(__dirname, 'dist'),
          // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
          routes: ['/index', '/smart', '/solution', '/about', '/acooperation', '/news', '/news_detail'],
          // 这个很重要，如果没有配置这段，也不会进行预编译
          renderer: new Renderer({
            inject: {
              foo: 'bar'
            },
            headless: false,
            // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
            renderAfterDocumentEvent: 'render-event'
          })
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'windows.jQuery': 'jquery',
        })
      ]
    }
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 代理设置
  devServer: {
    port: 7777,
    proxy: {
      '/webApi': {
        // 目标 API 地址
        target: 'https://www.smartconns.com/',
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '^/webApi': ''
        }
      }
    }
  },
  // css: {
  //     loaderOptions: {
  //         postcss: {
  //             plugins: [
  //                 require('postcss-pxtorem')({
  //                     rootValue: 37.5, // 换算的基数
  //   //                     selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
  //                     propList: ['*'],
  //                 }),
  //             ]
  //         }
  //     }
  // },
  // 全局变量
}
