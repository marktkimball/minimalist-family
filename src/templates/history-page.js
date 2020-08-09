import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import MiniHero from '../components/MiniHero';
import OurHistoryImage from '../img/our-history.jpg';

export const HistoryPageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <MiniHero image={OurHistoryImage} title={title} subtitle={subtitle} />
      <section className="section section--gradient">
        <PageContent className="content about-subsection" content={content} />
      </section>
    </>
  );
};

HistoryPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.node,
};

const HistoryPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <HistoryPageTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  );
};

HistoryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HistoryPage;

export const HistoryPageQuery = graphql`
  query HistoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
