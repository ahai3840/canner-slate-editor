const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {WebpackBundleSizeAnalyzerPlugin} = require('webpack-bundle-size-analyzer');

module.exports = {
  entry: {
    'cannerSlateEditor.umd': './src/index.js',
    'cannerSlateEditor.umd.min': './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'CannerSlateEditor',
    libraryTarget: 'umd',
    filename: '[name].js'
  },
  externals: {
     'react': "React",
    'react-dom': "ReactDOM",
     //'slate': "Slate",
    'styled-components': 'styled',
    'antd': 'antd',
    'lodash': '_',
    // 'immutable': 'Immutable',
    'moment': 'moment'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
      'slate': path.resolve(__dirname, 'node_modules', 'slate')
    }
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        test: /\.min\.js/,
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  plugins: [
    new WebpackBundleSizeAnalyzerPlugin('./report.txt'),
    new webpack.BannerPlugin({
      banner: `
/**
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @author ${pkg.author.name}
 * @link ${pkg.homepage}
 * @license ${pkg.license}
 */
      `.trim(),
      raw: true,
      entryOnly: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel',
        exclude: path.resolve(__dirname, "node_modules")
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
};
