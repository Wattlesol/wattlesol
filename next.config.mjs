/** @type {import('next').NextConfig} */
const nextConfig = {
  compilerOptions: {
    paths: {
      "@/*": ["./src/*"],
      "@pages/*": ["./src/app/*"],
    },
  },
  output: 'export', // Enable static export
};

export default nextConfig;

