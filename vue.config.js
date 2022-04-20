const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/eric-project/'
    : '/'
}, {

  transpileDependencies: true,
  pwa: {
    name: 'pwa',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',


    // 如果想要自己寫 service-worker.js
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js',
      // ...other Workbox options...
    },

    // 如果想要讓他自己生產
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // 不等待 terminated 直接取代舊的 service-worker
      // 解決無法自動更新的問題
      skipWaiting: true
    }
  }
})
