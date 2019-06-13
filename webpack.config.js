const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: './src/index.js',
  output:{
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['@babel/preset-env']
         }
       }
     },
     {
       test: /\.vue$/,
       loader: 'vue-loader'
     }
   ]
 },
 plugins: [
    new VueLoaderPlugin()
  ]
};
