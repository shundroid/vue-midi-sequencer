const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "./src/main.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devtool: "#cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [require("babel-plugin-transform-runtime")]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.woff$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./template.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [".vue", ".js", ".json"],
    alias: {
      "vue": "vue/dist/vue.common.js",
      "@": path.join(__dirname, "./src"),
      "@components": path.join(__dirname, "./src/components"),
      "@lib": path.join(__dirname, "./src/lib"),
      "@vuex": path.join(__dirname, "./src/vuex"),
      "@synth": path.join(__dirname, "./src/synth")
    }
  }
};
