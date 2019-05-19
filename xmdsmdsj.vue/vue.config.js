module.exports = {
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader'),
    config.module.rule('html')
      .test(/\.html/)
      .use('html-loader')
      .loader('html-loader')
      .end()
  }
}