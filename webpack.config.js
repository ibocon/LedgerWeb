// Paths
const path = require('path');
const distPath = path.join(__dirname, 'dist');
const publicPath = path.join(__dirname, 'public');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

// Modules
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: distPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // TypeScript
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // JavaScript
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: /node_modules/,
      },
      // Style
      {
        test: /\.s[ac]ss$/i,
        use: [ "style-loader", "css-loader", "sass-loader"],
      },
      // Image
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 8192 // bytes
          },
        }],
      },
    ]
  },
  resolve: {
    // options for resolving module requests (does not apply to resolving of loaders)
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: distPath,
    hot: true,
    inline: true,
    writeToDisk: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Ledger',
      template: path.join(publicPath, 'index.html'),
      favicon: path.join(publicPath, 'favicon.ico'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(publicPath, 'manifest.json'), to: distPath },
        { from: path.join(publicPath, 'robots.txt'), to: distPath },
        { from: path.join(publicPath, 'logo192.png'), to: distPath },
        { from: path.join(publicPath, 'logo512.png'), to: distPath },
      ],
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['mozjpeg', { progressive: true }],
          ['pngquant', { speed: 5 }],
          ['svgo', { plugins: [ { removeViewBox: false }]}],
        ],
      },
    }),
  ],
};