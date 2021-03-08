const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
  SRC: path.join(__dirname, './src'),
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: path.join(PATH.SRC, 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/public/',
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(svg)$/i,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              tsx: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
        options: { name: 'assets/img/[name].[ext]' }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    }),
  ]
}