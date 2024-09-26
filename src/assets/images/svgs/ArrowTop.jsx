import * as React from 'react';
const SvgArrowTop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 98 185"
    {...props}
  >
    <path
      fill="url(#arrowTop_svg__a)"
      d="M10.497 184.275a1.5 1.5 0 0 0 2.121 0l9.546-9.546a1.5 1.5 0 1 0-2.121-2.121l-8.485 8.485-8.486-8.485a1.5 1.5 0 1 0-2.121 2.121zm1.06-182.374V.4a1.5 1.5 0 0 0-1.5 1.5zm1.5 181.313V1.901h-3v181.313zm-1.5-179.813h85.874v-3H11.558z"
    />
    <defs>
      <linearGradient
        id="arrowTop_svg__a"
        x1={61.875}
        x2={96.964}
        y1={78.214}
        y2={2.079}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE3F3" />
        <stop offset={1} stopColor="#504A4A" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgArrowTop;
