/** @type {import('next').NextConfig} */
const nextConfig = {
    "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@pages/*": ["./src/app/*"],

    }
  }
};

export default nextConfig;
