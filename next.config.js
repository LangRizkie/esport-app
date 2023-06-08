/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakeimg.pl',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
