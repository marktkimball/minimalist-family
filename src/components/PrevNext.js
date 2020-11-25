import React from "react";
import { Link } from "gatsby";
import ArrowRightCircle from "../img/arrow-right-circle.svg";

import "./prev-next.scss";

const PrevNext = ({ prevDetails, nextDetails }) => (
  <div className="prev-next-container">
    <div className="tl">
      {prevDetails && (
        <>
          {prevDetails.titleText && (
            <p className="prev-next-title-text">{prevDetails.titleText}</p>
          )}
          <Link to={prevDetails.linkPath} className="prev-next-link">
            <img
              className="link-arrow-icon icon-reverse"
              src={ArrowRightCircle}
              alt="Previous"
              style={{ width: "1.5em", height: "1.5em" }}
            />
            {prevDetails.linkText}
          </Link>
        </>
      )}
    </div>
    <div className="tr">
      {nextDetails && (
        <>
          {nextDetails.titleText && (
            <p className="prev-next-title-text">{nextDetails.titleText}</p>
          )}
          <Link to={nextDetails.linkPath} className="prev-next-link">
            {nextDetails.linkText}{" "}
            <img
              className="link-arrow-icon"
              src={ArrowRightCircle}
              alt="Next"
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </Link>
        </>
      )}
    </div>
  </div>
);

export default PrevNext;
