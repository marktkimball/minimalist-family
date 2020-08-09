import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import './events.scss';

class EventRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return (
      <div className="columns is-multiline">
        {!posts ? (
          <h1>No upcoming events</h1>
        ) : (
          posts.map(({ node: post }) => {
            const eventDate = new Date(post.frontmatter.date);
            const isInPast = eventDate < tomorrow;

            return (
              <div className="is-parent column is-6" key={post.id}>
                <article
                  className={`event-list-item tile is-child box notification ${
                    post.frontmatter.featuredEvent ? 'is-featured' : ''
                  } ${isInPast ? 'is-in-past' : ''}`}
                >
                  <header>
                    <div className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                      <div className="is-size-5">{post.frontmatter.date}</div>
                      <div>{post.frontmatter.location}</div>
                    </div>
                  </header>
                  <div>
                    {post.frontmatter.description}
                    <br />
                    <br />
                    <div className="event-buttons-container">
                      <Link className="event-button" to={post.fields.slug}>
                        Event Details →
                      </Link>
                      {isInPast && (
                        <span className="expired-event-tag">In the past</span>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

EventRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query EventRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "event-item" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                location
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredEvent
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <EventRoll data={data} count={count} />}
  />
);
