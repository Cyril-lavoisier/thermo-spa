import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js",
    clean: true
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      // CSS
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      //JS
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      //IMG
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".mjs"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    static: "./dist",
    port: 3000
  }
};

