// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // <<-- ESSENCIAL para imagens do Sanity
  },
  // ... outras configurações que você possa ter
};

export default nextConfig;