// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

const {
  PRODUCT_APP_URL,
  CATEGORY_APP_URL,
  SEARCH_APP_URL,
  CONTENT_APP_URL,
  ACCOUNT_APP_URL,
  ORDER_TRACKING_APP_URL,
} = process.env;

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  trailingSlash: true,
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        library: { type: 'var', name: 'AccountApp' },
        remotes: {
          AccountApp: 'AccountApp',
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            'react-dom': {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );

    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        library: { type: 'var', name: 'OrderTrackingApp' },
        remotes: {
          OrderTrackingApp: 'OrderTrackingApp',
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            'react-dom': {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );

    config.module.rules.push({
      test: /_app.tsx/,
      loader: '@module-federation/nextjs-mf/lib/federation-loader.js',
    });

    return config;
  },
  nx: {
    svgr: false,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/product/:path*',
        destination: `${PRODUCT_APP_URL}/product/:path*`,
      },
      {
        source: '/search/:path*',
        destination: `${SEARCH_APP_URL}/search/:path*`,
      },
      {
        source: '/category/:path*',
        destination: `${CATEGORY_APP_URL}/search/:path*`,
      },
      {
        source: '/content/:path*',
        destination: `${CONTENT_APP_URL}/content/:path*`,
      },
      // {
      //   source: '/account/:path*',
      //   destination: `${ACCOUNT_APP_URL}/:path*`,
      // },
      // {
      //   source: '/track-my-order/:path*',
      //   destination: `${ORDER_TRACKING_APP_URL}/:path*`,
      // },
    ];
  },
};

module.exports = withNx(nextConfig);
