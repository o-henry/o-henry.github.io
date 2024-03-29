const rehypePrism = require("@mapbox/rehype-prism");
const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        rehypePlugins: [rehypePrism],
    },
});

module.exports = withMDX({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assertPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        icon: true,
                        titleProp: true,
                    },
                },
            ],
        });

        return config;
    },
});
