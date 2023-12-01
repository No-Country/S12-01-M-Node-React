import React, { FC, HTMLProps } from 'react';

interface FacebookIconProps extends HTMLProps<SVGSVGElement> {
  fill?: string;
}

const FacebookIcon: FC<FacebookIconProps> = ({ fill = '#1877f2', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-label="Facebook icon"
    height="24px"
    width="24px"
    fill={fill}
    {...props}
  >
    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm2.57 12.007H13V20h-2v-7.993H9V8.93h2V7.293C11 5.153 12.32 4 14.286 4c1.214 0 2.144.143 2.714.214v2.36a2.94 2.94 0 0 0-1.93-.786c-2.214 0-2.786 1.679-2.786 2.857v1.72h2.782l-.445 2.077z" />
  </svg>
);

export default FacebookIcon;
