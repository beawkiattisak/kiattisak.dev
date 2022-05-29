/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },

  //** Edit X-Powered-By */
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: "X-Powered-By",
            value: "Kiattisak Airplane on XyZerKunG HighWay",
          },
          {
            key: 'X-Contributors',
            value: "Kiattisak, XyZerKunG",
          },
        ],
      },
    ]
  },
}
