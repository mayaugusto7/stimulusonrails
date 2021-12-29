const path    = require("path")
const webpack = require("webpack")

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: [
   "./app/javascript/main.js",
   "./app/javascript/controllers/index.js"
  ],
  output: {
    filename: "application.js",
    sourceMapFilename: "application.js.map",
    path: path.resolve(__dirname, "app/assets/builds"),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ]
}
