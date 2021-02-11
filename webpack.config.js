// Paths
const webpack = require('webpack');
const path = require("path");
const srcPath = path.join(__dirname, "src");
const distPath = path.join(__dirname, "dist");
const publicPath = path.join(__dirname, "public");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// Modules
const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
  // https://github.com/webpack/webpack-dev-server/issues/2758
  target: "web",
  mode: isDevelopment ? "development" : "production",
  entry: [path.join(srcPath, "index.tsx")],
  output: {
    path: distPath,
    filename: "bundle.js",
  },
  module: {
    rules: [
      // TypeScript
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          }
        ],
      },
      // Style
      {
        test: /\.(sa|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // Image
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // bytes
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    plugins: [new TsconfigPathsPlugin()]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: distPath,
    historyApiFallback: true,
    hot: true,
    inline: true,
    writeToDisk: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Ledger",
      template: path.join(publicPath, "index.html"),
      favicon: path.join(publicPath, "favicon.ico"),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(publicPath, "manifest.json"), to: distPath },
        { from: path.join(publicPath, "robots.txt"), to: distPath },
      ],
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["mozjpeg", { progressive: true }],
          ["pngquant", { speed: 5 }],
          ["svgo", { plugins: [{ removeViewBox: false }] }],
        ],
      },
    }),
    new ForkTsCheckerWebpackPlugin(),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
