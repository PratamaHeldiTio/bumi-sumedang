const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'src/public/images/icon.png'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, './sw.js'),
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Bumi Sumedang',
      short_name: 'BS',
      description: 'Merupakan toko online tempat menampung hasil panen dari petani terbaik negeri ini khususnya kabupaten Sumedang',
      start_url: '/index.html',
      display: 'standalone',
      background_color: '#7ea04d',
      theme_color: '#7ea04d',
      icons: [
        {
          src: path.resolve('./src/public/images/icon.png'),
          size: [72, 96, 128, 144, 192, 256, 284, 512],
          purpose: 'any maskable',
        },
      ],
    }),
  ],
};
