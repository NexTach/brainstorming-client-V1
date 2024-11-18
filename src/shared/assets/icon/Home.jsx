import React from 'react';
import { colors } from '../ui/Colors';

export const HomeIcon = ({ color = colors.G_1 }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20H4.2C4.08954 20 4 19.9105 4 19.8V9.11085C4 9.04189 4.03552 8.9778 4.094 8.94125L11.894 4.06625C11.9589 4.02572 12.0411 4.02572 12.106 4.06625L19.906 8.94125C19.9645 8.9778 20 9.04189 20 9.11085V19.8C20 19.9105 19.9105 20 19.8 20H12ZM12 20V15"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};
