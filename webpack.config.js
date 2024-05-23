
const { 
  DIR,
  PORT,  
  CLIENT_DIR, 
} = require('./config.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  // main file
  entry: './src/index.js', 
  mode: process.env.NODE_ENV, // production or development

  // main export file
  output: {
    path: CLIENT_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },

  // if start a dev server
  devServer: {
    port: PORT,
    compress: true,
    hot: true, 
    liveReload: true,
    historyApiFallback: true, 
    server: 'https'
  },

  // html export
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html', 
    }), 
  ],

  resolve: {
    // alias imports
    alias: {
      '@': DIR + '/src',
      
      // for program in mobile :')
      'eruda': process.env.NODE_ENV === 'production' ?
        DIR + '/src/utils/__eruda-fake.js': // remove eruda in production
        'eruda',
    },
    extensions: ['.*', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(jpg|png|svg|mp3)$/i,
        type: 'asset',
      },
    ],
  },
};