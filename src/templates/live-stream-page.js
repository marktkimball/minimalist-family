import React from 'react';
import PropTypes from 'prop-types';
import { graphql, withPrefix } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import MiniHero from '../components/MiniHero';
import Spinner from '../components/Spinner';
import LiveStreamImage from '../img/livestream.jpg';

export const LiveStreamPageTemplate = ({ title, subtitle, lead }) => {
  return (
    <>
      <MiniHero image={LiveStreamImage} title={title} subtitle={subtitle} />
      <p className="about-page-lead">{lead}</p>
      <section className="section section--gradient">
        <div className="content">
          <div id="boxcast-widget-xitozwc5ayisqvml6map">
            <div className="live-stream-container">
              <p className="live-stream-loading-message">
                Loading Live Stream...
              </p>
              <Spinner />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

LiveStreamPageTemplate.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string,
  subtitle: PropTypes.string,
};

const LiveStreamPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Helmet>
        <script src={withPrefix('boxcast.js')} type="text/javascript" />
      </Helmet>
      <LiveStreamPageTemplate
        title={post.frontmatter.title}
        lead={post.frontmatter.lead}
        subtitle={post.frontmatter.subtitle}
      />
    </Layout>
  );
};

LiveStreamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default LiveStreamPage;

export const LiveStreamPageQuery = graphql`
  query LiveStream($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        lead
      }
    }
  }
`;
