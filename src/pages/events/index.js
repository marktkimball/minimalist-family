import React from 'react';

import Layout from '../../components/Layout';
import EventRoll from '../../components/EventRoll';
import MiniHero from '../../components/MiniHero';
import EventsImage from '../../img/about-us.jpg';

export default class EventsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <MiniHero
          image={EventsImage}
          title="Upcoming Events"
          subtitle="Gather with us"
        />
        <section className="section">
          <div className="container">
            <div className="content">
              <EventRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
