const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

    entry: './src/js/index.js',

    output: {
        publicPath: '',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
    },

    module: {
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader, 
                options: {
                  publicPath: '../'
                }
              },
              "css-loader",
              "sass-loader",
            ],
          },

          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "images",
                }
              },
            ],
          },

          {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "fonts",
                }
              },
            ],
          },

          {
            test: /\.html$/i,
            loader: 'html-loader',
          },

          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },
        ],
    },
    
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 1598,
        writeToDisk: true,
        stats: 'errors-only',
        open: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new HtmlWebpackPlugin({
          filename: "tour1.html",
          template: "./src/tour1.html",
        }),
        new HtmlWebpackPlugin({
          filename: "tour2.html",
          template: "./src/tour2.html",
        }),
    ]
}