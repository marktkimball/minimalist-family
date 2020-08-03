import React from 'react';
import PropTypes from 'prop-types';
import MiniHero from '../components/MiniHero';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PictureCTAContainer from '../components/PictureCTA';
import CommunionImage from '../img/communion.jpg';
import meetPastorImage from '../img/meet-pastor.jpg';
import leadershipImage from '../img/leadership.jpg';
import ourBeliefsImage from '../img/our-beliefs.jpg';
import ourHistoryImage from '../img/our-history.jpg';

export const AboutPageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <MiniHero image={CommunionImage} title={title} subtitle={subtitle} />
      <section className="section section--gradient">
        <PageContent className="content" content={content} />
        <PictureCTAContainer
          items={[
            { image: ourBeliefsImage, title: 'Our Beliefs', to: '/beliefs' },
            { image: ourHistoryImage, title: 'Our History', to: '/history' },
            { image: meetPastorImage, title: 'Meet Our Pastor', to: '/pastor' },
            { image: leadershipImage, title: 'Leadership', to: '/leadership' },
          ]}
        />
      </section>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
