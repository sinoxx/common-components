const path = require('path');

module.exports = {
  title: '星诺组件库',
  version: 'v0.1.0',
  components: 'src/components/**/[A-Z]*.js',
  require: ['babel-polyfill', path.join(__dirname, 'node_modules/antd/dist/antd.min.css')],
  usageMode: 'expand',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/env', { loose: true, modules: false, useBuiltIns: 'usage' }],
                ['@babel/react'],
              ],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader',
        },
        {
          test: /\.svg$/,
          loader: 'file-loader',
          query: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      ],
    },
  },
};
