const { ModuleFederationPlugin } = require('webpack').container;
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  nrwlConfig(config);
  return {
    ...config,
    plugins: [
      new ModuleFederationPlugin({
        name: 'AccountApp',
        library: { type: 'var', name: 'AccountApp' },
        filename: 'remoteEntry.js',
        exposes: {
          './AccountApp': `${__dirname}/src/app/app`,
        },
        shared: [
          {
            react: {
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            'react-dom': {
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
