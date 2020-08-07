import React from 'react';
import PropTypes from 'prop-types';
import MiniHero from '../components/MiniHero';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PictureCTAContainer from '../components/PictureCTA';
import AboutUsImage from '../img/aboutUs.jpg';
import MissionsImage from '../img/missions.jpg';
import LeadershipImage from '../img/leadership.jpg';
import OurBeliefsImage from '../img/our-beliefs.jpg';
import OurHistoryImage from '../img/our-history.jpg';

export const AboutPageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <MiniHero image={AboutUsImage} title={title} subtitle={subtitle} />
      <section className="section section--gradient">
        <PageContent className="content" content={content} />
        <PictureCTAContainer
          items={[
            { image: OurBeliefsImage, title: 'Our Beliefs', to: '/beliefs' },
            { image: OurHistoryImage, title: 'Our History', to: '/history' },
            { image: MissionsImage, title: 'Missions', to: '/missions' },
            { image: LeadershipImage, title: 'Leadership', to: '/leadership' },
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
