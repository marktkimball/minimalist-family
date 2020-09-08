import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Layout from '../components/Layout';

export const IndexPageTemplate = ({ featuredImages }) => (
  <div className="featured-images-wrapper">
    {featuredImages.map((featured, index) => (
      <div className={`grid-${index + 1}`}>
        <div className="featured-image-container">
          <PreviewCompatibleImage imageInfo={featured.image} />
          <div className="featured-image-caption">
            {featured.caption}
            {featured.secondaryCaption && (
              <span className="featured-image-secondary-caption">
                - {featured.secondaryCaption}
              </span>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

IndexPageTemplate.propTypes = {
  featuredImages: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ).isRequired,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate featuredImages={frontmatter.featuredImages} />
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        featuredImages {
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          caption
          secondaryCaption
        }
      }
    }
  }
`;
