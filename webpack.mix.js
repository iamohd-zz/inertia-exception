const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.js', 'public/js')
    .webpackConfig(webpack => {
        return {
            plugins: [
                new webpack.DefinePlugin({
                    __VUE_OPTIONS_API__: true,
                    __VUE_PROD_DEVTOOLS__: false
                })
            ],
            output: {
                chunkFilename: 'js/[name].js?id=[hash]'
            },
            resolve: {
                alias: {
                    '@': path.resolve('resources/js'),
                    vue: path.resolve('node_modules', 'vue'),
                },
            },
        };
    })
    .vue({
        version: 3
    })
    .version()
    .sourceMaps();
