import React from 'react';

import Layout from '../../components/Layout';
import PortfolioRoll from '../../components/PortfolioRoll';
import MiniHero from '../../components/MiniHero';
import PortfolioImage from '../../img/about-us.jpg';

export default class PorfolioIndexPage extends React.Component {
  render() {
    return (
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
  }
}
