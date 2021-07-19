// Generated using webpack-cli https://github.com/webpack/webpack-cli
import webpack from 'webpack';
import path from "path"
import fs from 'fs';

const isProduction = false;

const FileLoader = {
  loader: 'file-loader',
  options: {
    name: '[path][name].[ext]',
  }
};




var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


const config = {
  entry: {

    app: path.resolve("app.js")
  },
  output: {
    "path":  path.resolve('public/app'),
    "filename": "[name].js",
  },
  "watch": true,
  externals: nodeModules,
  resolve: {
    extensions: ['.ts', '.js', '.json','.tls']
  },
  target: 'node',
  devServer: {
    contentBase: path.resolve( 'public'),
    open: false,
    inline: true,// if false, show app in iframe with status on top of page
    overlay: !isProduction,//if true, show compile errors on browser
    compress: true,
    host: "localhost",
    // proxy: {
    //     '/api': 'http://localhost:3000',
    // },

    quiet: isProduction,// if true, console not show any error
    serveIndex: !isProduction, // if true, enabled all directories will be show file lists in browser
    writeToDisk: true,
    headers: {'Access-Control-Allow-Origin': '*'},
  },
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),

  ],
  devtool: 'sourcemap',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: ["babel-loader"]
      },


      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          FileLoader
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          FileLoader
        ],
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  },

};

export default () => {
  if (isProduction) {
    config.mode = "production";

    // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
