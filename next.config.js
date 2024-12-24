/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['res.cloudinary.com','encrypted-tbn0.gstatic.com','drive.google.com'],
  },
}

module.exports = nextConfig