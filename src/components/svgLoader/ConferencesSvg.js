import React from "react";
import PropTypes from "prop-types";

const ConferencesSvg = (props) => {
  // <style>.a{fill:#d3d3d3;}.b{clip-path:url(#a);}</style>

  const { fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="50"
      height="70"
      viewBox="0 0 70 70"
    >
      <defs>
        <clipPath id="a">
          <rect className="a" width="70" height="70" transform="translate(70 43)" />
        </clipPath>
      </defs>
      <g className="b" transform="translate(-70 -43)">
        <g transform="translate(70.001 43)">
          <path
            className="a"
            d="M61.977,58.331H49.786a2.187,2.187,0,0,1,0-4.375H60.443L64.687,42.29H5.308L9.552,53.957h10.66a2.187,2.187,0,1,1,0,4.375H8.021a2.188,2.188,0,0,1-2.056-1.441L.131,40.849a2.187,2.187,0,0,1,2.056-2.934H67.81a2.19,2.19,0,0,1,2.056,2.937L64.033,56.894A2.189,2.189,0,0,1,61.977,58.331Z"
            fill={fill}
          />
          <path
            className="a"
            d="M47.4,70a2.192,2.192,0,0,1-2.164-2.52L47.762,51.04H22.236l2.529,16.438a2.187,2.187,0,0,1-4.322.665L17.526,49.185a2.185,2.185,0,0,1,2.161-2.52H50.311a2.189,2.189,0,0,1,2.161,2.523L49.555,68.146A2.184,2.184,0,0,1,47.4,70Z"
            fill={fill}
          />
          <path
            className="a"
            d="M65.623,41.561a2.188,2.188,0,0,1-2.187-2.187,16.813,16.813,0,0,0-8.053-14.259,2.188,2.188,0,0,1,2.278-3.736,21.22,21.22,0,0,1,10.147,18A2.184,2.184,0,0,1,65.623,41.561Z"
            fill={fill}
          />
          <circle
            className="a"
            cx="4.375"
            cy="4.375"
            r="4.375"
            fill={fill}
            transform="translate(49.582 17.499)"
          />
          <path
            className="a"
            fill={fill}
            d="M35,23.333A11.666,11.666,0,1,1,46.665,11.666,11.678,11.678,0,0,1,35,23.333ZM35,4.375a7.291,7.291,0,1,0,7.291,7.291A7.3,7.3,0,0,0,35,4.375Z"
          />
          <path
            className="a"
            fill={fill}
            d="M56.873,42.29A2.188,2.188,0,0,1,54.686,40.1a9.49,9.49,0,0,0-9.479-9.479H24.791A9.49,9.49,0,0,0,15.312,40.1a2.187,2.187,0,1,1-4.375,0A13.87,13.87,0,0,1,24.791,26.249H45.207A13.87,13.87,0,0,1,59.061,40.1,2.188,2.188,0,0,1,56.873,42.29Z"
          />
        </g>
      </g>
    </svg>
  );
};

ConferencesSvg.propTypes = {};

export default ConferencesSvg;
