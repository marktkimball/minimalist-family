import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  console.info("DATA!", { entry, data });

  if (data) {
    return (
      <IndexPageTemplate
        aboutContent={{
          aboutBody: data.aboutBody,
          aboutImage: data.aboutImage,
        }}
        heroContnet={{
          leftImage: data.leftImage,
          rightImage: data.rightImage,
          subtitle: data.subtitle,
        }}
        welcomeContent={{
          content: data.welcomeContent,
          heading: data.welcomeHeading,
          linkText: data.welcomeLinkText,
        }}
      />
    );
  }

  return <div>Loading...</div>;
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default IndexPagePreview;
