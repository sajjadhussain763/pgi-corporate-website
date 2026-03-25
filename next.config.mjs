/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure assets load correctly on GitHub Pages
  basePath: '/PG-Corporate-Website-',
  assetPrefix: '/PG-Corporate-Website-/',
};

export default nextConfig;
