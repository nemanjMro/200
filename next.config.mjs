/** @type {import('next').NextConfig} */
const nextConfig = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      frameSrc: [
        "https://democasinoslots-default-rtdb.europe-west1.firebasedatabase.app/data.json",
      ],
      // ...
    },
  },
};

export default nextConfig;
