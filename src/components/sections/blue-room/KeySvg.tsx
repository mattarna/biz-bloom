'use client';

import React from 'react';

interface KeySvgProps {
  className?: string;
  onClick?: () => void;
}

export const KeySvg: React.FC<KeySvgProps> = ({ className = '', onClick }) => {
  return (
    <svg
      viewBox="0 0 64 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      role="button"
      aria-label="Enter the Blue Room"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {/* Key handle (oval ring at top) */}
      <ellipse
        cx="32"
        cy="24"
        rx="18"
        ry="22"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Inner decorative ring */}
      <ellipse
        cx="32"
        cy="24"
        rx="10"
        ry="13"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      {/* Key shaft */}
      <line
        x1="32"
        y1="46"
        x2="32"
        y2="120"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Key teeth (right side, bottom) */}
      <path
        d="M32 105 L44 105 L44 112 L38 112 L38 118 L32 118"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Small notch mid-shaft */}
      <line
        x1="32"
        y1="88"
        x2="40"
        y2="88"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Decorative dot on handle */}
      <circle
        cx="32"
        cy="24"
        r="3"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
};
