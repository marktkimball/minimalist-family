import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';

export const CreditsPageTemplate = ({
  title,
  credits,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <section className="section section--gradient">
        <h1 className="headline-text credits-headline">{title}</h1>
        <PageContent className="content" content={content} />
        <ul className="credits-list">
          {credits.map((credit, i) => (
            <li key={i}>{credit}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

CreditsPageTemplate.propTypes = {
  title: PropTypes.string,
  credits: PropTypes.arrayOf(PropTypes.string),
};

const CreditsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CreditsPageTemplate
        title={post.frontmatter.title}
        credits={post.frontmatter.credits}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  );
};

CreditsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default CreditsPage;

export const CreditsPageQuery = graphql`
  query CreditsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        credits
      }
    }
  }
`;
