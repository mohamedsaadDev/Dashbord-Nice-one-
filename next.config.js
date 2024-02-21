
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_HOST: process.env.HOST,
  },
  images: {
    domains: ['tradition-nice-one-api.vercel.app', 'localhost'],
  },
};

module.exports = nextConfig;
