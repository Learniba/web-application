// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const MiniCssExtractPlugin =require("mini-css-extract-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const isProduction = false;
const {VueLoaderPlugin} = require('vue-loader');
const FileLoader={
    loader: 'file-loader',
    options: {
        name: '[path][name].[ext]',
    }
};

const config = {
    entry: {
        themeCss:
            [
                "./theme/assets/font/iconsmind-s/css/iconsminds.css",
                "./theme/assets/font/simple-line-icons/css/simple-line-icons.css",
                "./theme/assets/css/vendor/jquery.contextMenu.min.css",
                "./theme/assets/css/vendor/bootstrap.min.css",
                "./theme/assets/css/vendor/bootstrap.rtl.only.min.css",
                "./theme/assets/css/vendor/perfect-scrollbar.css",
                "./theme/assets/css/vendor/select2.min.css",
                "./theme/assets/css/vendor/select2-bootstrap.min.css",
                "./theme/assets/css/vendor/component-custom-switch.min.css",
                "./theme/assets/css/main.css",
            ],
        themeColors: [
            "./theme/assets/css/dore.dark.bluenavy.css",
            "./theme/assets/css/dore.dark.blueolympic.css",
            "./theme/assets/css/dore.dark.blueyale.css",
            "./theme/assets/css/dore.dark.greenlime.css",
            "./theme/assets/css/dore.dark.greenmoss.css",
            "./theme/assets/css/dore.dark.greysteel.css",
            "./theme/assets/css/dore.dark.orangecarrot.css",
            "./theme/assets/css/dore.dark.purplemonster.css",
            "./theme/assets/css/dore.dark.redruby.css",
            "./theme/assets/css/dore.dark.yellowgranola.css",
            "./theme/assets/css/dore.light.bluenavy.css",
            "./theme/assets/css/dore.light.blueolympic.css",
            "./theme/assets/css/dore.light.blueyale.css",
            "./theme/assets/css/dore.light.greenlime.css",
            "./theme/assets/css/dore.light.greenmoss.css",
            "./theme/assets/css/dore.light.greysteel.css",
            "./theme/assets/css/dore.light.orangecarrot.css",
            "./theme/assets/css/dore.light.purplemonster.css",
            "./theme/assets/css/dore.light.redruby.css",
            "./theme/assets/css/dore.light.yellowgranola.css",
        ],
        themeJs: [
            "./theme/assets/js/vendor/jquery-3.3.1.min.js",
            "./theme/assets/js/vendor/bootstrap.bundle.min.js",
            "./theme/assets/js/vendor/perfect-scrollbar.min.js",
            "./theme/assets/js/vendor/select2.full.js",
            "./theme/assets/js/vendor/mousetrap.min.js",
            "./theme/assets/js/vendor/jquery.contextMenu.min.js",
            "./theme/assets/js/dore.script.js",
            "./theme/assets/js/scripts.js"
        ],
        app: "./index.js"
    },
    output: {
        "path": path.resolve(__dirname, '../public/assets'),
        "filename": "[name].js",
    },
    "watch": true,
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, '../public'),
        open: false,
        inline: true,// if false, show app in iframe with status on top of page
        overlay: !isProduction,//if true, show compile errors on browser
        compress: true,
        host: "localhost",
        proxy: {
            '/api': 'http://localhost:3000',
        },

        quiet: isProduction,// if true, console not show any error
        serveIndex: !isProduction, // if true, enabled all directories will be show file lists in browser
        writeToDisk: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: path.resolve(__dirname, "../public/index.html"),
        }),
        new FriendlyErrorsWebpackPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({

        })
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: ["babel-loader"]
            },
            {
                test: /\.css|@$/i,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/i,
                use: ["vue-loader"]
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    FileLoader
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    FileLoader
                ],
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ]
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";

        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = "development";
    }
    return config;
};
