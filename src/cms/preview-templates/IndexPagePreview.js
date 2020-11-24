import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  console.info("DATA!", { entry, data });

  if (data) {
    return (
      <IndexPageTemplate
        leftImage={data.leftImage}
        rightImage={data.rightImage}
        subtitle={data.subtitle}
        welcomeHeading={data.welcomeHeading}
        welcomeContent={data.welcomeContent}
        welcomeLinkText={data.welcomeLinkText}
        aboutBody={data.aboutBody}
        aboutImage={data.aboutImage}
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
