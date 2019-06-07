const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + "/app/main.js", //�Ѷ���ἰ��Ψһ����ļ�
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    devtool: 'null', //ע���޸���������ܴ��ѹ�����ǵĴ������
    devServer: {
        contentBase: "./public", //���ط����������ص�ҳ�����ڵ�Ŀ¼
		port:"8888"
        historyApiFallback: true, //����ת
        inline: true,
        hot: true
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "postcss-loader"
                }],
            })
        }]
    },
    plugins: [
        new webpack.BannerPlugin('��Ȩ���У�����ؾ�'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new һ����������ʵ������������صĲ���
        }),
        new webpack.HotModuleReplacementPlugin() //�ȼ��ز��
    ]
};