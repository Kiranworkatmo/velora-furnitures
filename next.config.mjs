const nextConfig = { output: 'export', trailingSlash: true, basePath: process.env.NODE_ENV === 'production' ? '/velora-furnitures' : '', images: { unoptimized: true } }; export default nextConfig;
