import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import './error-page.scss';

const NotFoundPage = () => (
  <Layout>
    <section className="section section--gradient">
      <h1 className="headline-text error-heading">Page Not Found</h1>
      <p className="error-body">
        We've looked, but we couldn't find that page.
      </p>
      <Link to="/">Return Home</Link>
    </section>
  </Layout>
);

export default NotFoundPage;
