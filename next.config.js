const { withContentlayer } = require('next-contentlayer');
/** @type {import('next').NextConfig} */

const nextConfig = {
  formats: ['image/*'],
};

module.exports = withContentlayer(nextConfig);
