module.exports = {
  siteMetadata: {
    siteUrl: "https://minimalisttravelfamily.com",
    author: "marktkimball",
    publisher: "minimalisttravelfamily.com",
    title: "Minimalist Travel Family",
    description:
      "Follow the adventures of our minimalist family as we travel the world and explore new places.",
    image: "/images/logo.jpg",
    bannerImage: "/images/banner.jpg",
    blogPostsPerPage: 5,
    social: {
      instagram: "",
    },
    mailchimpUrl: "http://eepurl.com/hi7W1D",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Fitalia", "SimpleScript"],
          urls: ["/fonts/fonts.css"],
        },
        google: {
          families: ["Poppins"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  custom_elements: [{ "content:encoded": edge.node.html }],
                  date: edge.node.frontmatter.date,
                  description: edge.node.frontmatter.excerpt,
                  guid:
                    site.siteMetadata.siteUrl +
                    "/blog/" +
                    edge.node.fields.slug,
                  url:
                    site.siteMetadata.siteUrl +
                    "/blog/" +
                    edge.node.fields.slug,
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { type: { eq: "post" } } published: { eq: true }}
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      fields { slug }
                      html
                      excerpt(pruneLength: 400)
                      frontmatter {
                        title
                        author
                        date
                        tags
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.scss"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
