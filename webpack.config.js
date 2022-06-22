const path = require('path')
// const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',

    entry: {
        index: './src/index.ts',
        background: './src/background.ts',
        ui: './src/ui/ui.tsx'
    },

    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].js'
    },
    externals: {},
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        fallback: {
            path: require.resolve('path-browserify')
            // fs: require.resolve('browserify-fs'),
            // stream: require.resolve('stream-browserify')
        },
        alias: {
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat', // Must be below test-utils
            'react/jsx-runtime': 'preact/jsx-runtime'
        }
    },
    module: {
        rules: [{ test: /\.(ts|tsx)$/, exclude: /(node_modules)/, loader: 'ts-loader' }]
    },
    context: __dirname,
    node: {
        __dirname: true
    },
    plugins: [
        // new BundleAnalyzerPlugin()
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/manifest.json',
                    to: '../manifest.json'
                }
            ]
        })
        // new webpack.ProvidePlugin({
        //     process: 'process/browser'
        // }),
        // new webpack.ProvidePlugin({
        //     Buffer: ['buffer', 'Buffer']
        // })
    ]
}
