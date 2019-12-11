const nextOffline = require('next-offline')


module.exports = withOffline({
  workboxOpts: {
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
      {
        urlPattern: /.png$/,
        handler: 'CacheFirst'
      }
    ]
  }
})
