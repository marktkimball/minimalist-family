import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import MiniHero from '../components/MiniHero';
import ourBeliefsImage from '../img/our-beliefs.jpg';

export const BeliefsPageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <MiniHero image={ourBeliefsImage} title={title} subtitle={subtitle} />
      <section className="section section--gradient">
        <PageContent className="content beliefs" content={content} />
      </section>
    </>
  );
};

BeliefsPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.node,
};

const BeliefsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BeliefsPageTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  );
};

BeliefsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BeliefsPage;

export const BeliefsPageQuery = graphql`
  query BeliefsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
