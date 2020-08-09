import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import Features from '../components/Features';
import Layout from '../components/Layout';
import MiniHero from '../components/MiniHero';
import ImNewImage from '../img/im-new.jpg';

export const ImNewPageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
  items,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <MiniHero image={ImNewImage} title={title} subtitle={subtitle} />
      <section className="section section--gradient">
        <PageContent className="content" content={content} />
        <Features gridItems={items} />
      </section>
    </>
  );
};

ImNewPageTemplate.propTypes = {
  title: PropTypes.string,
};

const ImNewPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ImNewPageTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        contentComponent={HTMLContent}
        content={post.html}
        items={post.frontmatter.items}
      />
    </Layout>
  );
};

ImNewPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ImNewPage;

export const ImNewPageQuery = graphql`
  query ImNewPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        items {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          lead
          text
        }
      }
    }
  }
`;
