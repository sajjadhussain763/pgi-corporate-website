/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use relative asset paths as requested
  basePath: '/pgi-corporate-website',
  assetPrefix: '/pgi-corporate-website/',
  trailingSlash: true,
};

export default nextConfig;
