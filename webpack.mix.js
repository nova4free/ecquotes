const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.ts', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .stylus('resources/stylus/app.styl', 'public/css')
   .disableNotifications()
   .copyDirectory('resources/img', 'public/img')
   .sourceMaps()
 

if (mix.inProduction()) {
   mix.version()
 
   mix.extract([
     'vue',
     'vform',
     'axios',
     'vuex',
     'vue-i18n',
     'vue-meta',
     'js-cookie',
     'vue-router',
     'vuetify',
     'vee-validate',
     'vuex-router-sync'
   ])
 } else {
   mix.webpackConfig({
     devtool: 'inline-source-map'
   })
 }

mix.webpackConfig({
   plugins: [
   ],
   resolve: {
      alias: {
         '~': path.join(__dirname, './resources/js')
      }
   }
})
