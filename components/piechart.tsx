import React from "react";

function Icon({data}: {data: any}) {

  const colors = {
    0: "#ff0000",
    1: '#ff7f00',
    2: '#ffff00',
    3: '#BFFF00',
    4: '#00ff00',
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 226 226"
    >
      <path
        fill={colors[data[0] as keyof typeof colors]}
        d="M113.004 118.539l43.301 75H69.703l43.301-75z"
      ></path>
      <path
        fill={colors[data[1] as keyof typeof colors]}
        d="M206.305 116.239l-43.302 75-43.301-75h86.603z"
      ></path>
      <path
        fill={colors[data[2] as keyof typeof colors]}
        d="M106.305 116.239l-43.302 75-43.3-75h86.602z"
      ></path>
      <path
        fill={colors[data[3] as keyof typeof colors]}
        d="M113.004 106.984l43.301-75H69.703l43.301 75z"
      ></path>
      <path
        fill={colors[data[4] as keyof typeof colors]}
        d="M206.305 109.277l-43.302-75-43.301 75h86.603z"
      ></path>
      <path
        fill={colors[data[5] as keyof typeof colors]}
        d="M106.305 109.277l-43.302-75-43.3 75h86.602z"
      ></path>
    </svg>
  );
}

export default Icon;
