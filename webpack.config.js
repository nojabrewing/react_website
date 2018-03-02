const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, '/node_modules'),
        use: ['babel-loader']
      },
      {
        test: /\.((s*)css)$/,
        use: ['style-loader', 'css-loader','sass-loader'],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
            publicPath: "./fonts/"
        },
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "./images/"
            }
          },
          {
            loader: 'image-webpack-loader',
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    //new ExtractTextPlugin({filename:'main.css'})
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',
    port: 9000,
  }
};
