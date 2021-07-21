const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const dotenv = require("dotenv");

const config = {
  // mode: "development",
  mode: "production",
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                [
                  "@babel/env",
                  {
                    targets: { browsers: "since 2017-06" },
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|jpg|ico|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            limit: 100000,
            name: "images/[name].[ext]",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 500,
    ignored: /node_modules/,
  },
};

const client = Object.assign({}, config, {
  name: "client",
  target: "web",
  entry: path.resolve(__dirname, "src/client/index.tsx"),
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/client/public/index.html" }],
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/public"),
  },
});

const server = Object.assign({}, config, {
  name: "server",
  target: "node",
  entry: path.resolve(__dirname, "src/server/index.ts"),
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }),
    new Dotenv(),
  ],
});

module.exports = [client, server];
