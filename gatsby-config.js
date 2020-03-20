module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-cname`,
    `gatsby-plugin-netlify`
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Journey`,
    author: `Ranvir Singh`,
    description: `Tech and everything`,
    siteUrl: 'http://blog.ranvir.xyz/',
    image: "abc.png",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
