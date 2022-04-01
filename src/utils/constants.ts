export const host =
  process.env.NODE_ENV === 'production'
    ? process.env.productionHost
    : 'http://localhost:1337'
