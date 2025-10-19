/** @type {import('next').NextConfig} */
const isProd = true;

module.exports = {
  output: 'export',                // genera HTML estático en /out
  images: { unoptimized: true },   // GitHub Pages no hace optimización de Next/Image
  trailingSlash: true,             // URLs con / al final (más seguro en Pages)
  basePath: '/Literatura/apps/versos', // donde se servirá tu app dentro del dominio
  assetPrefix: '/Literatura/apps/versos/', // prefijo para assets
};
