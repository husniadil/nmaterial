const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const withAssetsManifest = require('next-assets-manifest')

module.exports = (phase) =>
  withAssetsManifest(
    withPWA({
      pwa: {
        disable: phase === PHASE_DEVELOPMENT_SERVER,
        dest: 'public',
      },
      assetsManifest: {
        customize(entry, original, manifest, asset) {
          return {
            key: entry.key,
            value: '/_next/' + entry.value,
          }
        },
        done(manifest) {
          console.log(`${manifest}`)
        },
      },
      assetsManifestClient: {
        output: '../public/asset-manifest.json',
      },
    })
  )
