module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-73349527-9'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-mathjax`,
        ],
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-cname`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Ranvir Singh`,
    author: `Ranvir Singh`,
    description: `Tech and everything`,
    siteUrl: 'https://blog.ranvir.xyz/',
    image: "abc.png",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ranvirsingh1114`,
      },
      {
        name: `github`,
        url: `https://github.com/singh1114`,
      },
    ],
  },
}
