// const purgecss = require('@fullhuman/postcss-purgecss')({
//   content: ['./public/**/*.html'],
//   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
// })

module.exports = {
  // plugins: {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // ...process.env.NODE_ENV === 'production'
    //   ? [require('cssnano')]
    //   : []
  ]
  //   'postcss-preset-env': {
  //     browsers: 'last 2 versions',
  //   },
  //   cssnano: {},
  //   autoprefixer: {},
  //   tailwindcss: {},
  // },
}
