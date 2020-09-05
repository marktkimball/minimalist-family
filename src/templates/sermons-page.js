import React from 'react';
import PropTypes from 'prop-types';
import MiniHero from '../components/MiniHero';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sermons from '../components/Sermons';
import Content, { HTMLContent } from '../components/Content';
import SermonsImage from '../img/sermons.jpg';

export const SermonsPageTemplate = ({
  title,
  subtitle,
  lead,
  sermons,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <MiniHero image={SermonsImage} title={title} subtitle={subtitle} />
      <p className="about-page-lead">{lead}</p>
      <section className="section section--gradient">
        <PageContent className="content about-subsection" content={content} />
        <Sermons sermons={sermons} />
      </section>
    </>
  );
};

SermonsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  sermons: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    file: PropTypes.any.isRequired,
  }),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const SermonsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SermonsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        lead={post.frontmatter.lead}
        subtitle={post.frontmatter.subtitle}
        sermons={post.frontmatter.sermons}
        content={post.html}
      />
    </Layout>
  );
};

SermonsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SermonsPage;

export const SermonsPageQuery = graphql`
  query SermonsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        lead
        subtitle
        sermons {
          title
          speaker
          file
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;
