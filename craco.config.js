const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            strictMath: true,
            noIeCompat: true,
            modifyVars: { "@primary-color": "#1DA57A" },
          },
        },
        postcssLoaderOptions: {
          postcssOptions: {
            ident: "postcss",
            plugins: [
              require('postcss-flexbugs-fixes'),
              require('postcss-preset-env')({
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
              }),
              require('postcss-normalize')(),
            ],
          },
        },
      },
    },
  ],
};
