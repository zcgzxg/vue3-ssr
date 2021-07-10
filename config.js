
/**
 * @see [config document](http://doc.ssr-fc.com/docs/api$config)
 * @type {import('ssr-types').IConfig}
 */
const config = {
  chainBaseConfig: (chain) => {
    chain.module
      .rule('compile')
      .use('babel-loader')
      .tap((args) => {
        args.plugins = args.plugins || []
        args.plugins.push([
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'lib', // 这里一定要用 lib
            style: true // true 代表 style/index.js 会加载 less 类型的文件
          },
          'ant-design-vue'
        ])
        return args
      })
  },
  // chainClientConfig: chain => {
  //   chain.optimization
  //     .splitChunks({
  //       chunks: 'async',
  //       minSize: 20000,
  //       minChunks: 1,
  //       maxAsyncRequests: 30,
  //       maxInitialRequests: 30,
  //       enforceSizeThreshold: 50000,
  //       cacheGroups: {
  //         vendors: {
  //           test: /[\\/]node_modules[\\/]/,
  //           priority: -10,
  //           reuseExistingChunk: true
  //         },
  //         common: {
  //           minChunks: 2,
  //           priority: -20,
  //           reuseExistingChunk: true
  //         }
  //       }
  //     })
  //     .end()
  // }
}

module.exports = config
