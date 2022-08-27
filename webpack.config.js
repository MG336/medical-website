const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { Chunk } = require('webpack');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
      watchFiles: ["./src/pages/blog.html"],
        open: true,
        hot: true,
        port: 8080,
    }
};

module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  entry:{
    index: './src/index.js',
    blog: './src/blog.js',
    post: './src/js/post.js',
    about: './src/js/about.js',
    contact: './src/js/contact.js',
    prices: './src/js/contact.js'
  }, 


  
  

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    assetModuleFilename: 'files/[hash][ext][query]'
  },
  
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html',
          chunks: ['index']
      }),
          
      new HtmlWebpackPlugin({
        filename: './pages/blog.html',
        template: './src/pages/blog.html',
        chunks: ['blog']
      }),
      new HtmlWebpackPlugin({
        filename: './pages/post.html',
        template: './src/pages/post.html',
        chunks: ['post']
      }),
      new HtmlWebpackPlugin({
        filename: './pages/about.html',
        template: './src/pages/about.html',
        chunks: ['about']
      }),
      new HtmlWebpackPlugin({
        filename: './pages/contact.html',
        template: './src/pages/contact.html',
        chunks: ['contact']
      }), 
      new HtmlWebpackPlugin({
        filename: './pages/prices.html',
        template: './src/pages/prices.html',
        chunks: ['prices']
      }),
      new MiniCssExtractPlugin({
          filename: './styles/main.css'
      })
  ],
  module: {
      rules: [
        {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            type: 'asset/resource',

          },
          {
              test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
              type: 'asset/resource',

          },
          {
              test: /\.html$/i,
              loader: 'html-loader'
          },
          {
            test: /\.mp4$/i,
            type: 'asset/resource',
          },  
          
          {
              test: /\.css$/i,
              use: [
                MiniCssExtractPlugin.loader, 'css-loader'
              ]
          },
          {
              test: /\.scss$/i,
              use: [
                MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
              ]
          }
      ]
  },
  ...devServer(develop),
});