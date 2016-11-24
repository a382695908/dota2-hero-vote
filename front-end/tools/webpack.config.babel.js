/**
 * Created by yyj on 23/11/2016.
 */

import path from 'path';
import webpack from 'webpack';
import extend from 'extend';
import proxyRules from './proxy';
import AssetsPlugin from 'assets-webpack-plugin';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const isDebug = !process.argv.includes('--release');
const isVerbose = process.argv.includes('--v');

const root = path.resolve(__dirname, '../src');

const config = {

  output: {
    // options related how webpack emits results
    path: path.resolve(__dirname, "../dist"),

    filename: isDebug ? '[name].js?[hash]' : '[name].[chunkhash].js',
    chunkFilename: isDebug ? '[name].[id].js?[hash]' : '[name].[id].[chunkhash].js',

    publicPath: "/assets/",

    libraryTarget: "commonjs",

  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          root
        ],
        exclude: [
          path.resolve(__dirname, "../src/assets")
        ],
        loader: "babel-loader",
        options: {
          presets: [
            "es2015",
            'stage-0',
            'react',
            // 'react-optimize',
          ]
        },
      },
      {
        test: "\.html$",
        include: [
          root
        ],
        use: [
          // apply multiple loaders and options
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {

            }
          }
        ]
      }
    ]
  },

  resolve: {

    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],

    extensions: [".js", ".json", ".jsx", ".css"],

  },

  // "source-map", // enum
  // "inline-source-map", // inlines SourceMap into orginal file
  // "eval-source-map", // inlines SourceMap per module
  // "hidden-source-map", // SourceMap without reference in original file
  // "cheap-source-map", // cheap-variant of SourceMap without module mappings
  // "cheap-module-source-map", // cheap-variant of SourceMap with module mappings
  // "eval", // no S
  devtool:  isDebug ? 'source-map' : false,

  context: path.join(__dirname,'../'),

  target: "web",

  externals: "react",

  watch: true,
  watchOptions: {
    aggregateTimeout: 1000, // in ms
    // aggregates multiple changes to a single rebuild

    poll: true,
    poll: 500, // intervall in ms
    // enables polling mode for watching
    // must be used on filesystems that doesn't notify on change
    // i. e. nfs shares
  },

  cache: isDebug,

  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      'process.env.BROWSER': true,
      __DEV__: isDebug,
    }),

    new webpack.optimize.OccurrenceOrderPlugin(true),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource),
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(root, 'index.html'),
      // favicon: path.resolve(__dirname, '../static/favicon.ico')
    })
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    proxy: proxyRules
  }


};

const clientConfig = extend(true, {}, config, {

  entry: [
    {
      app:"./src/app"
    }
  ],

});

export default clientConfig;