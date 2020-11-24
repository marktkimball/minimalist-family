import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Content, { HTMLContent } from "../components/Content";
import PrevNext from "../components/PrevNext";
import "./blog-post.scss";

export const BlogPostTemplate = ({
  author,
  content,
  contentComponent,
  dateFormattedPretty,
  helmet,
  next,
  prev,
  tags,
  title,
}) => {
  const PostContent = contentComponent || Content;
  const nextDetails = !next
    ? null
    : {
        linkPath: next.fields.slug,
        linkText: next.frontmatter.title,
        titleText: "Next Post",
      };

  const prevDetails = !prev
    ? null
    : {
        linkPath: prev.fields.slug,
        linkText: prev.frontmatter.title,
        titleText: "Previous Post",
      };

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content blog-container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light blog-post-title">
              {title}
            </h1>
            <div className="blog-post-subtitle">
              by {author} on {dateFormattedPretty}
            </div>
            <hr />
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Button to={`/tags/${kebabCase(tag)}/`}>{tag}</Button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <PrevNext prevDetails={prevDetails} nextDetails={nextDetails} />
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  author: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  dateFormattedPretty: PropTypes.string,
};

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { prev, next } = pageContext;

  return (
    <Layout>
      <BlogPostTemplate
        author={post.frontmatter.author}
        content={post.html}
        contentComponent={HTMLContent}
        dateFormattedPretty={post.frontmatter.dateFormattedPretty}
        description={post.excerpt}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.excerpt}`} />
          </Helmet>
        }
        next={next}
        prev={prev}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 400)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        author
        dateFormattedPretty: date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
