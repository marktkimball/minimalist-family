import React from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

import "./blog-list-item.scss";

const BlogListItem = ({ node }) => (
  <div key={node.id}>
    <Link to={`${node.fields.slug}`} className="no-underline">
      <div className="post">
        <div className="post-column">
          <h2 className="post-title">{node.frontmatter.title}</h2>
          <p className="post-subtitle">
            by {node.frontmatter.author} on {node.frontmatter.date}
          </p>
          <p className="post-excerpt">{node.excerpt}</p>
        </div>
        <div className="post-column">
          <PreviewCompatibleImage imageInfo={node.frontmatter.featuredImage} />
        </div>
      </div>
    </Link>
  </div>
);

export default BlogListItem;
