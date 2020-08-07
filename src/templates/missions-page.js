import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import MiniHero from '../components/MiniHero';
import StaffMembers from '../components/StaffMembers';
import MissionsImage from '../img/missions.jpg';
import './about.scss';

export const MissionsPageTemplate = ({
  title,
  subtitle,
  precontent,
  lead,
  missionaries,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <MiniHero image={MissionsImage} title={title} subtitle={subtitle} />
      <p className="about-page-lead">{lead}</p>
      <section className="section section--gradient">
        <PageContent
          className="content about-subsection"
          content={precontent}
        />
        <div className="content">
          <StaffMembers staff={missionaries} />
        </div>
        <PageContent className="content about-subsection" content={content} />
      </section>
    </>
  );
};

MissionsPageTemplate.propTypes = {
  title: PropTypes.string,
  precontent: PropTypes.string,
  subtitle: PropTypes.string,
  lead: PropTypes.string,
  missionaries: PropTypes.array,
  content: PropTypes.node,
};

const MissionsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <MissionsPageTemplate
        title={post.frontmatter.title}
        precontent={post.frontmatter.precontent}
        lead={post.frontmatter.lead}
        subtitle={post.frontmatter.subtitle}
        missionaries={post.frontmatter.missionaries}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  );
};

MissionsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default MissionsPage;

export const MissionsPageQuery = graphql`
  query MissionsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        precontent
        lead
        missionaries {
          name
          subtitle
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
