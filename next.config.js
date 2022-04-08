/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  assetPrefix: './',
  env: {
    productionHost: 'https://cohaut-admin.herokuapp.com',
  },
}
