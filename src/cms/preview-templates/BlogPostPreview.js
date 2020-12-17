import React from "react";
import PropTypes from "prop-types";
import { BlogPostContentTemplate } from "../../templates/blog-post";

const BlogPostPreview = ({ entry, getAsset, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  const date = entry.getIn(["data", "date"]);

  return (
    <BlogPostContentTemplate
      author={entry.getIn(["data", "author"])}
      date={date && date.toLocaleDateString()}
      featuredImage={getAsset(entry.getIn(["data", "featuredImage"]))}
      tags={tags && tags.toJS()}
      title={entry.getIn(["data", "title"])}
    >
      {widgetFor("body")}
    </BlogPostContentTemplate>
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
