import * as React from 'react';
const SvgArrow3 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 96 190"
    {...props}
  >
    <path
      fill="url(#Arrow3_svg__a)"
      d="M85.66 1.154a1.5 1.5 0 0 0-2.122 0L73.992 10.7a1.5 1.5 0 1 0 2.121 2.121L84.6 4.336l8.485 8.485a1.5 1.5 0 1 0 2.121-2.121zm-1.061 186.475v1.5a1.5 1.5 0 0 0 1.5-1.5zm-1.5-185.415V187.63h3V2.214zm1.5 183.915H.66v3h83.939z"
    />
    <defs>
      <linearGradient
        id="Arrow3_svg__a"
        x1={98.46}
        x2={-42.84}
        y1={1.043}
        y2={53.755}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE3F3" />
        <stop offset={1} stopColor="#504A4A" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgArrow3;
