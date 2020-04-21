const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getIfUtils }  = require('webpack-config-utils')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development'
const { ifDevelopment, ifNotTest, ifProduction } = getIfUtils(NODE_ENV)

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          // fallback to style-loader in development
          ifNotTest( MiniCssExtractPlugin.loader, 'style-loader'),
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/')
    },
    extensions: [ '.tsx', '.ts', '.js', '.scss' ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      ifDev: ifDevelopment(true, false),
      ifProd: ifProduction(true, false),
      template: path.resolve(__dirname, 'index.html')
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};