import React from 'react';
import { colors } from '../ui/Colors';

export const ReminderIcon = ({ color = colors.G_1 }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_79_721"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill={colors.WHITE} />
      </mask>
      <g mask="url(#mask0_79_721)">
        <path
          d="M12 23C13.1 23 14 22.1 14 21C14 19.9 13.1 19 12 19C10.9 19 10 19.9 10 21C10 22.1 10.9 23 12 23Z"
          fill={color}
        />
        <path
          d="M20.63 16H3.37C3.16565 16 3 16.1657 3 16.37V17.63C3 17.8343 3.16565 18 3.37 18H20.63C20.8343 18 21 17.8343 21 17.63V16.37C21 16.1657 20.8343 16 20.63 16Z"
          fill={color}
        />
        <path
          d="M12 3C14.76 3 17 5.24 17 8V16H7V8C7 5.24 9.24 3 12 3ZM12 1C8.13 1 5 4.13 5 8V18H19V8C19 4.13 15.87 1 12 1Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
