const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withPWA = require('next-pwa')

module.exports = (phase) =>
  withPWA({
    pwa: {
      disable: phase === PHASE_DEVELOPMENT_SERVER,
      dest: 'public',
    },
  })
