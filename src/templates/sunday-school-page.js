import React from 'react';
import PropTypes from 'prop-types';
import MiniHero from '../components/MiniHero';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import SundaySchoolImage from '../img/bible-on-desk.jpg';

export const SundaySchoolTemplate = ({
  title,
  subtitle,
  lead,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <MiniHero image={SundaySchoolImage} title={title} subtitle={subtitle} />
      <p className="about-page-lead">{lead}</p>
      <section className="section section--gradient">
        <PageContent className="content about-subsection" content={content} />
      </section>
    </>
  );
};

SundaySchoolTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const SundaySchool = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SundaySchoolTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        lead={post.frontmatter.lead}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
      />
    </Layout>
  );
};

SundaySchool.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SundaySchool;

export const SundaySchoolQuery = graphql`
  query SundaySchool($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        lead
        subtitle
      }
    }
  }
`;
