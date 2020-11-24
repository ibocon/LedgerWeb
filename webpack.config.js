// Paths
const path = require('path');
const srcPath = path.join(__dirname, 'src');
const distPath = path.join(__dirname, 'dist');
const publicPath = path.join(__dirname, 'public');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// Modules
module.exports = {
  
  // https://github.com/webpack/webpack-dev-server/issues/2758
  target: 'web',

  mode: 'development',
  entry: ['react-hot-loader/patch', path.join(srcPath, 'index.tsx')],
  output: {
    path: distPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // TypeScript
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // Style
      {
        test: /\.s[ac]ss$/i,
        use: [ 'style-loader', 'css-loader', 'sass-loader'],
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
    extensions: [ '.tsx', '.ts', '.jsx', '.js' ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: distPath,
    historyApiFallback: true,
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
    new ForkTsCheckerWebpackPlugin(),
  ],
};