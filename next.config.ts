/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "product.hstatic.net",
      },
      {
        protocol: "http", // thêm cái này để support localhost
        hostname: "localhost",
        port: "5000", 
      },
    ],
  },
};

module.exports = nextConfig;
