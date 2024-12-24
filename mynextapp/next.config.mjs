import withImages from 'next-images';

/** @type {import('next').NextConfig} */
const nextConfig = withImages({
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: ['firebasestorage.googleapis.com'],
  }// Enable static exporting
});

export default nextConfig;