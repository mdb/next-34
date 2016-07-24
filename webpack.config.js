module.exports = {
  entry: [
    './src/assets/javascript/application.js'
  ],
  output: {
    path: './dist/assets/javascript',
    filename: 'application.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: ['babel'],
      exclude: /node_modules/,
      test: /\.jsx?$/,
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};
