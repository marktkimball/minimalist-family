import React from "react";
import BlogListItem from "./BlogListItem";
import "./blog-list-item.scss";

const BlogList = ({ data }) => (
  <section className="blog-list-section">
    {data.edges.map(({ node }) => (
      <BlogListItem key={node.id} node={node} />
    ))}
  </section>
);

export default BlogList;
