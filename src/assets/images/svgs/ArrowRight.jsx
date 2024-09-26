import * as React from 'react';
const SvgArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 113"
    {...props}
  >
    <path
      fill="url(#arrowRight_svg__a)"
      d="M13.06 1.381a1.5 1.5 0 0 0-2.12 0l-9.547 9.546a1.5 1.5 0 1 0 2.122 2.122L12 4.563l8.485 8.486a1.5 1.5 0 1 0 2.122-2.122zm-2.56 1.06v110.001h3v-110z"
    />
    <defs>
      <linearGradient
        id="arrowRight_svg__a"
        x1={11.5}
        x2={11.5}
        y1={-9.698}
        y2={112.442}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.4} stopColor="#FFE3F3" />
        <stop offset={1} stopColor="#4F4949" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgArrowRight;
