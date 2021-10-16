const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //extraer el css en un archivo aparte

module.exports = {
  //mode: "development",
  //mode: "production",
  entry : "./src/main.js",
  output : {
      path: path.join(__dirname,"dist"),
      filename: "bundle.js",
      assetModuleFilename: 'images/[hash][ext][query]'
  },
  resolve: {
    extensions: [".js",".jsx"]
  },
  module: { //sirver para decirle a webpack como transformar archivos que no sean js o json
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use:["babel-loader"]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Mercado libre',
      minify: true,
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    historyApiFallback: true,
  },
}