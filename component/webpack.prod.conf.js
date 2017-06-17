const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "./src/App.vue"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "package.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        use: "babel-loader",
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
  resolve: {
    extensions: [".vue", ".js", ".json"],
    alias: {
      "vue": "vue/dist/vue.common.js",
      "@": path.join(__dirname, "./src"),
      "@components": path.join(__dirname, "./src/components"),
      "@lib": path.join(__dirname, "./src/lib"),
      "@vuex": path.join(__dirname, "./src/vuex")
    }
  },
  externals: [
    "vue",
    "vuex",
    "vue-material"
  ]
}
