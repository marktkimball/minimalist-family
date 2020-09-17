import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import './portfolio.scss';

class PortfolioRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <>
        {posts.map(({ node: post }) => (
          <article key={post.id} className="depth-2 portfolio-list-item">
            <header>
              <div className="post-meta">
                <Link
                  className="headline-text title has-text-primary is-size-2"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
              </div>
              <div className="featured-thumbnail">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                  }}
                />
              </div>
              <div className="is-size-5">{post.frontmatter.date}</div>
            </header>
            <div>
              {post.frontmatter.description}
              <br />
              <br />
              <div className="portfolio-buttons-container">
                <Link className="portfolio-button" to={post.fields.slug}>
                  Project Details →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </>
    );
  }
}

PortfolioRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "portfolio-item" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PortfolioRoll data={data} count={count} />}
  />
);
