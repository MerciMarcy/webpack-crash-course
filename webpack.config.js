const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');
// console.log({outputPath});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        enforce: 'pre', // 他のローダーより早く実行される
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // 後ろから順に実行
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: './images/[name].[ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  devtool: 'eval-source-map',
};
