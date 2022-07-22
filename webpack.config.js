const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
      watchFiles: ["./src/*"],
        open: true,
        hot: true,
        port: 8080,
    }
};

module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'files/[hash][ext][query]'
  },
  
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
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