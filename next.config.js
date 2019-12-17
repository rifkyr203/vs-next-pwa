const nextOffline = require('next-offline')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const path = require('path')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')




module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return withCSS(withImages({
            webpack: config => {
              config.resolve.alias['components'] = path.join(__dirname, 'components')
              config.resolve.alias['public'] = path.join(__dirname, 'public')
              config.resolve.alias['route'] = path.join(__dirname, 'routes')
              return config
            }
    }))
  }

  return nextOffline(withImages())
}
