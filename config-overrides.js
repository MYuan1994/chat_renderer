
const {
    override
} = require('customize-cra');

module.exports = override((config) => {
    config.target = 'electron-renderer';
    return config;
},
    // addWebpackAlias({
    //     ["aliasimgurl"]: path.resolve(__dirname, "src/assets/images")
    // }),

)