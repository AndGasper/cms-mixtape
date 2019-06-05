const path = require('path');
// must return an object
module.exports = (environment) => {
    console.log('webpack.config.js - environment', environment);
    return {
        entry: './index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        }
    }

}