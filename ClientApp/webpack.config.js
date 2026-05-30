const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, '../Scripts/dist'),
        filename: 'bundle.js',
        publicPath: '/Scripts/dist/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
                generator: { filename: 'assets/[name][hash][ext]' },
            },
            {
                test: /\.pdf$/i,
                type: 'asset/resource',
                generator: { filename: 'assets/[name][hash][ext]' },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: [
            {
                directory: path.resolve(__dirname, 'public'),
                publicPath: '/',
            },
            {
                directory: path.resolve(__dirname, '../Images'),
                publicPath: '/Images',
            },
        ],
        port: 3000,
        hot: true,
        open: true,
    },
    mode: 'development',
};
