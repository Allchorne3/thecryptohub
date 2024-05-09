let mix = require('laravel-mix')
const path = require('path');

mix

    .webpackConfig({
        resolve: {
            alias: {
                Scripts: path.resolve(__dirname, 'site/src/scripts/'),
                Utils: path.resolve(__dirname, 'site/src/scripts/utils/'),
            }
        }
    })

    // Directories
    .copyDirectory('./site/src/assets', 'public/assets')
    .copyDirectory('./site/_redirects', 'public/')

    // JavaScript
    .js('./site/src/scripts/app.js', 'public/scripts').setPublicPath('public')

    // CSS
    .sass('./site/src/style/style.scss', 'public/style/style.css')
