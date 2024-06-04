/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Setting `resolve.alias` to `false` will tell webpack to ignore a module.
      // `msw/node` is a server-only module that exports methods not available in
      // the `browser`.
      config.resolve.alias = {
        ...config.resolve.alias,
        'msw/node': false,
      };
    } else {
      config.resolve.alias = {
        ...config.resolve.alias,
        'msw/browser': false,
      };
    }
    return config;
  },
};

export default nextConfig;
