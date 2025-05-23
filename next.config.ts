/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // สำคัญสำหรับการ export บน GitHub Pages
  },
};

module.exports = nextConfig;
