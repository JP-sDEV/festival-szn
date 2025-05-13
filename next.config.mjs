/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://dz2cdn1.dzone.com/**")],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Ensure the externals array exists
      config.externals = config.externals || [];

      // Add the specific modules you want to externalize
      config.externals.push("@azure/functions-core");
    }

    return config;
  },
};

export default nextConfig;
