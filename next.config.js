/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gmgall.cfcontentdnfls.eu",
        port: "",
        pathname: "/**",
      },
    ]
  },
};
 
console.log(nextConfig);
 
module.exports = nextConfig;
 