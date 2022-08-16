/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules = [
      ...config.module.rules,
      // https://github.com/vercel/next.js/issues/12557
      {
        test: [
          /components\/index.ts/i,
        ],
        sideEffects: false,
      },
    ]
    return config;
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZER === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
