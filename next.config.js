/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  compiler: {
    styledComponents: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
