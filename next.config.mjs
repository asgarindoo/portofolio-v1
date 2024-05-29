/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "plus.unsplash.com" },
      { hostname: "via.placeholder.com", protocol: "https" },
      { hostname: "github.com", protocol: "https" },
    ],
  },
};

export default nextConfig;
