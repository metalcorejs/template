import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.5 2.75v16.5a2.17 2.17 0 01-.656 1.594 2.17 2.17 0 01-1.594.656h-3.984v-8.297h2.812l.422-3.187h-3.234V8c0-.5.093-.875.28-1.125.25-.281.673-.422 1.267-.422H18.5V3.641c-.656-.094-1.469-.141-2.438-.141-1.25 0-2.25.375-3 1.125-.718.719-1.078 1.734-1.078 3.047v2.344H9.125v3.187h2.86V21.5H2.75a2.17 2.17 0 01-1.594-.656A2.17 2.17 0 01.5 19.25V2.75c0-.625.219-1.156.656-1.594A2.17 2.17 0 012.75.5h16.5a2.17 2.17 0 011.594.656c.437.438.656.969.656 1.594z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={11}
          y1={-1}
          x2={11}
          y2={23}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BC9CFF" />
          <stop offset={1} stopColor="#8BA4F9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
