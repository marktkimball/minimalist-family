import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Button from "../components/Button";
import Layout from "../components/Layout";
import HeroHeader from "../components/HeroHeader";
import EmailSignup from "../components/EmailSignup";
import AboutContent from "../components/AboutContent";
import BlogList from "../components/BlogList";

import "./index-page.scss";

export const IndexPageTemplate = ({
  aboutContent,
  heroContent,
  latestPosts,
  welcomeContent,
}) => (
  <div>
    <HeroHeader {...heroContent} />

    {/* Welcome Section */}
    <section className="sub-section main-feature-section">
      <h2 className="scripted-heading">{welcomeContent.heading}</h2>
      <div>
        <p>{welcomeContent.content}</p>
      </div>
      <Button to="/about">{welcomeContent.linkText}</Button>
    </section>

    {/* Latest Posts Section */}
    <section className="sub-section latest-posts-section">
      <h2 className="scripted-heading">Latest Posts</h2>
      <BlogList data={latestPosts} />
    </section>

    {/* Subscribe Section */}
    <section className="sub-section subscribe-section">
      <EmailSignup />
    </section>

    {/* About Section */}
    <section className="sub-section final-sub-section about-section">
      <AboutContent image={aboutContent.aboutImage} imageFirst button>
        {aboutContent.aboutBody}
      </AboutContent>
    </section>
  </div>
);

// IndexPageTemplate.propTypes = {};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        aboutContent={{
          aboutBody: frontmatter.aboutBody,
          aboutImage: frontmatter.aboutImage,
        }}
        heroContent={{
          leftImage: frontmatter.leftImage,
          rightImage: frontmatter.rightImage,
          subtitle: frontmatter.subtitle,
        }}
        latestPosts={data.latestPosts}
        welcomeContent={{
          content: frontmatter.welcomeContent,
          heading: frontmatter.welcomeHeading,
          linkText: frontmatter.welcomeLinkText,
        }}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    latestPosts: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 400)
          frontmatter {
            title
            author
            date(formatString: "MMMM Do, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 750, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          id
        }
      }
    }

    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        leftImage {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        rightImage {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subtitle
        welcomeHeading
        welcomeContent
        welcomeLinkText
        aboutBody
        aboutImage {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
