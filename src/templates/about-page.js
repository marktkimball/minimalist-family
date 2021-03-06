import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";

import "./about-page.scss";

export const AboutPageTemplate = ({
  content,
  contentComponent,
  image,
  title,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient text-align-center about-me">
      <h2 className="scripted-heading">{title}</h2>
      <div className="about-me-content-container">
        <div className="about-me-intro">
          <PageContent className="content" content={content} />
        </div>
        <PreviewCompatibleImage imageInfo={image} />
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout pageTitle="About | The Minimalist Travel Family">
      <AboutPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
      }
    }
  }
`;
