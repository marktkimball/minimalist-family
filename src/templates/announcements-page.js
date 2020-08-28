import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';

export const AnnouncementsPageTemplate = ({
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <section className="section section--gradient">
        <h1 className="headline-text credits-headline">{title}</h1>
        <PageContent className="content" content={content} />
      </section>
    </>
  );
};

AnnouncementsPageTemplate.propTypes = {
  title: PropTypes.string,
};

const AnnouncementsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AnnouncementsPageTemplate
        title={post.frontmatter.title}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  );
};

AnnouncementsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AnnouncementsPage;

export const AnnouncementsPageQuery = graphql`
  query AnnouncementsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
