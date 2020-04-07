module.exports = {
  siteMetadata: {
    title: `Праздник с Лазертаг и Нерф в Мытищах «Pantheon»`,
    description: `Отметьте праздник на крытой лазертаг-арене в 10-ти минутах от станции Мытищи. Вы выбираете во что играть, а с нас остальное.`,
    author: `DZakh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pantheon.fun`,
        short_name: `pantheon`,
        description: `Отметьте праздник на крытой лазертаг-арене в 10-ти минутах от станции Мытищи. Вы выбираете во что играть, а с нас остальное.`,
        lang: `ru`,
        display: `browser`,
        icon: `src/images/favicon.svg`,
        start_url: `/`,
        theme_color: `#141111`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
          omitKeys: [
            'xmlnsDc',
            'xmlnsCc',
            'xmlnsRdf',
            'xmlnsSvg',
            'xmlnsSodipodi',
            'xmlnsInkscape',
          ],
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'nk6o1twh',
        dataset: 'promo',
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `700`],
            subsets: [`cyrillic`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
