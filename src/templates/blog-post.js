import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Content, { HTMLContent } from "../components/Content";
import PrevNext from "../components/PrevNext";
import SocialShare from "../components/SocialShare";
import Comments from "../components/Comments";
import EmailSignup from "../components/EmailSignup";
import CommentForm from "../components/CommentForm";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import "./blog-post.scss";

export const BlogPostContentTemplate = ({
  author,
  children,
  date,
  featuredImage,
  siteUrl,
  slug,
  tags,
  title,
}) => (
  <div className="container content blog-container">
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light blog-post-title">
          {title}
        </h1>
        <div className="blog-post-subtitle">
          by {author} on {date}
        </div>
        <SocialShare
          text="SHARE THIS POST"
          shareTitle={title}
          shareUrl={`${siteUrl}${slug}`}
        />
        <hr />
        <div className="blog-post-featured-image-container">
          <PreviewCompatibleImage imageInfo={featuredImage} />
        </div>
        {children}
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
);

export const BlogPostTemplate = ({
  author,
  content,
  contentComponent,
  dateFormattedPretty,
  featuredImage,
  helmet,
  id,
  next,
  prev,
  tags,
  title,
  siteUrl,
  slug,
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
      <BlogPostContentTemplate
        author={author}
        date={dateFormattedPretty}
        featuredImage={featuredImage}
        siteUrl={siteUrl}
        slug={slug}
        tags={tags}
        title={title}
      >
        <PostContent content={content} />
      </BlogPostContentTemplate>

      <div className="blog-post-end blog-container">
        <h3 className="sub-headline-text">Thanks for reading!</h3>
        <SocialShare
          text="SHARE THIS POST"
          shareTitle={title}
          shareUrl={`${siteUrl}${slug}`}
        />
      </div>

      <PrevNext prevDetails={prevDetails} nextDetails={nextDetails} />

      <div className="blog-post-sign-up-section">
        <EmailSignup />
      </div>

      <Comments postId={id} />
      <CommentForm postId={id} />
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
        featuredImage={post.frontmatter.featuredImage}
        contentComponent={HTMLContent}
        dateFormattedPretty={post.frontmatter.dateFormattedPretty}
        description={post.excerpt}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.excerpt}`} />
          </Helmet>
        }
        id={post.id}
        next={next}
        prev={prev}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        slug={post.fields.slug}
        siteUrl={data.site.siteMetadata.siteUrl}
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
        author
        dateFormattedPretty: date(formatString: "MMMM Do, YYYY")
      }
      fields {
        slug
      }
    }
    site: site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
