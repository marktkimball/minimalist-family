import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PictureCTAContainer from '../components/PictureCTA';
import WelcomeImage from '../img/welcome.jpg';
import SundaySchoolImage from '../img/sunday-school.jpg';

import Layout from '../components/Layout';

export const IndexPageTemplate = ({ missionStatement, image, logo }) => (
  <div>
    <div
      className="full-width-image margin-top-0 home-jumbotron depth-4"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div
        style={{
          maxWidth: '80%',
        }}
      >
        <img
          alt="logo"
          src={!!logo.childImageSharp ? logo.childImageSharp.fluid.src : logo}
        />
      </div>
      <div className="jumbotron-info-text-container">
        <h2 className="info-text headline-text">Loveland, Ohio</h2>
        <h2 className="info-text headline-text">Sunday Worship - 11am</h2>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <h1 className="title headline-text main-pitch">{missionStatement}</h1>
      </div>
      <PictureCTAContainer
        items={[
          { image: WelcomeImage, title: "I'm New", to: '/im-new' },
          {
            image: SundaySchoolImage,
            title: 'Sunday School',
            to: '/sunday-school',
          },
        ]}
      />
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  missionStatement: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        missionStatement={frontmatter.missionStatement}
        image={frontmatter.image}
        logo={frontmatter.logo}
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        missionStatement
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
