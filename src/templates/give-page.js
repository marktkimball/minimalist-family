import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import MiniHero from '../components/MiniHero';
import GiveImage from '../img/give.jpg';

export const GivePageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <MiniHero image={GiveImage} title={title} subtitle={subtitle} />
      <section className="section section--gradient">
        <PageContent className="content about-subsection" content={content} />
        <div className="paypal-container">
          <div className="depth-3 paypal-button">
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="A69SM4FJQQUTY"
              />
              <input
                alt="Donate with PayPal button"
                border="0"
                name="submit"
                src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
                title="PayPal - The safer, easier way to pay online!"
                type="image"
              />
              <img
                alt=""
                border="0"
                height="1"
                hidden=""
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                style={{ display: 'none' }}
                width="1"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

GivePageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.node,
};

const GivePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <GivePageTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  );
};

GivePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default GivePage;

export const GivePageQuery = graphql`
  query GivePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
