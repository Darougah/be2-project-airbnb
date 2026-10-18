/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: new URL(process.env.SUPABASE_URL || 'https://yqadtnikqchpxvvasmnp.supabase.co').hostname,
      },
    ],
  },
};

export default nextConfig;