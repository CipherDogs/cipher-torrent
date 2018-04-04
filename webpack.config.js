module.exports = {
  mode: 'production',
  entry: {
    app: './js/app.js'
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}
