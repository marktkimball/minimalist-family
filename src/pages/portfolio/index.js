import React from 'react';
import Layout from '../../components/Layout';
import PortfolioRoll from '../../components/PortfolioRoll';
import MiniHero from '../../components/MiniHero';
import PortfolioImage from '../../img/about-us.jpg';

const PorfolioIndexPage = () => (
  <Layout>
    <MiniHero
      image={PortfolioImage}
      title="Portfolio"
      subtitle="Explore my recent work"
    />
    <section className="section">
      <div className="container">
        <div className="content">
          <PortfolioRoll />
        </div>
      </div>
    </section>
  </Layout>
);

export default PorfolioIndexPage;
