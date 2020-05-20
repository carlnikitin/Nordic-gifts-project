const path = require('path')

module.exports = {
    outputDir: path.resolve(__dirname, '../server/api/public'),
    devServer: {
        proxy: {
            '/posts': {
                target: 'http://localhost:4000'
            },
            '/user': {
                target: 'http://localhost:4000'
            }
        }
    }
}