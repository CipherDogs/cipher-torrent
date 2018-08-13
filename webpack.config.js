const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'production',
    entry: {
        app: './js/main.js'
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
        },
        {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[local]_[hash:base64:8]'
                    }
                }
            ]
        }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
