const nextOffline = require('next-offline')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = nextOffline(withCSS(withImages()))
