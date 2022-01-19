module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/brands',
          permanent: true,
        },
      ]
    },
  }