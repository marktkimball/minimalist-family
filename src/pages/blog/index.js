import React from "react";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import "../../templates/pages.scss";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="section full-width-image-container margin-top-0">
          <h1 className="is-size-1 scripted-heading">Latest Stories</h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
