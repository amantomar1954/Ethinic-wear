/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com'], // ✅ Allow both domains
  },
};

export default nextConfig;
