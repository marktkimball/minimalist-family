import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const EventItemTemplate = ({
  address,
  date,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="headline-text title is-size-2">{title}</h1>
            <div className="event-meta-data-container">
              <div className="alt-headline-text event-date-text">{date}</div>
              <div className="event-location-text">
                Location:{' '}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${address}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {address}
                </a>
              </div>
              <p className="event-description-text">{description}</p>
            </div>
            <hr />
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

EventItemTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.object,
};

const EventItem = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <EventItemTemplate
        content={post.html}
        contentComponent={HTMLContent}
        date={post.frontmatter.date}
        address={post.frontmatter.address}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Event">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

EventItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default EventItem;

export const pageQuery = graphql`
  query EventItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        address
      }
    }
  }
`;
