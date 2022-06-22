const path = require('path');
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',

    entry: {
        index: './src/index.ts',
        background: './src/background.ts',
        ui: './src/ui/ui.tsx',
    },

    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].js',
    },
    externals: {},
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat', // Must be below test-utils
            'react/jsx-runtime': 'preact/jsx-runtime',
        },
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, exclude: /(node_modules)/, loader: 'ts-loader' },
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: 'raw-loader',
            //             options: {
            //                 esModule: false
            //             }
            //         }
            //     ]
            // }, //['style-loader', 'css-loader'] },
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules)/,
            //     use: [
            //         {
            //             loader: 'babel-loader?cacheDirectory'
            //         }
            //     ]
            // },
            // {
            //     test: /\.jsx$/,
            //     exclude: /(node_modules)/,
            //     use: [{ loader: 'babel-loader' }]
            // }
            // {
            //     use: [
            //         {
            //             loader: "transform-loader?brfs",
            //         },
            //     ],
            //     enforce: "post"
            // }
        ],
    },
    context: __dirname, //set the context of your app to be the project directory
    node: {
        __dirname: true, //Allow use of __dirname in modules, based on context
        // request: false,
        // net: 'empty',
        // tls: 'empty',
        // fs: false,
        // electron: 'empty',
        // process: false,
        // Buffer: false,
        // electron: 'empty'
    },
    // plugins: [
    //     new BundleAnalyzerPlugin()
    //   ]
};
