/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.akamai.steamstatic.com",
      "cdn.akamai.steamstatic.com",
      "avatars.steamstatic.com",
      "steamcdn-a.akamaihd.net",
      "cdn.cloudflare.steamstatic.com",
    ],
  },
};

module.exports = nextConfig;
