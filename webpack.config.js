const webpack = {
  module: {
    rules: [
      {
        // I 've added a new rule and I included the style path from node_modules
        include: path.resolve(
          __dirname,
          './node_modules/react-image-gallery/styles/scss/image-gallery.scss'
        ),
        test: /\.(s[ac]ss|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
export default webpack;
1;
