const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  nrwlConfig(config);
  return {
    ...config,
    plugins: [
      new ModuleFederationPlugin({
        name: 'OrderTrackingApp',
        library: { type: 'var', name: 'OrderTrackingApp' },
        filename: 'remoteEntry.js',
        remotes: {},
        exposes: {
          './OrderTrackingApp': `${__dirname}/src/app/app`,
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
      }),
      ...config.plugins,
    ],
  };
};
