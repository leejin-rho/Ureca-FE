import * as React from 'react';
const SvgArrow1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 112"
    {...props}
  >
    <path
      fill="url(#Arrow1_svg__a)"
      d="M10.94 111.503a1.5 1.5 0 0 0 2.12 0l9.547-9.546a1.5 1.5 0 0 0-2.122-2.122L12 108.321l-8.485-8.486a1.5 1.5 0 1 0-2.122 2.122zM10.5.442v110h3v-110z"
    />
    <defs>
      <linearGradient
        id="Arrow1_svg__a"
        x1={11.5}
        x2={11.5}
        y1={0.442}
        y2={110.442}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#504A4A" />
        <stop offset={1} stopColor="#FFE3F3" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgArrow1;
