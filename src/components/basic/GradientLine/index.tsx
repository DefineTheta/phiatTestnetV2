import React from 'react';
import { gradient, useThemeContext } from '@aave/aave-ui-kit';

interface GradientLineProps {
  height?: number;
}

export default function GradientLine({ height }: GradientLineProps) {
  const { currentTheme } = useThemeContext();

  const gradientBackground = gradient(
    90,
    `${currentTheme.secondary.rgb}, 1`,
    0,
    `${currentTheme.primary.rgb}, 1`,
    100
  );

  return (
    <span className="GradientLine">
      <style jsx={true}>{`
        .GradientLine {
          width: 100%;
          height: ${height || 1}px;
          display: block;
          //background: ${gradientBackground};
          background: linear-gradient(
            90deg,
            rgba(230, 25, 230, 1) 0%,
            rgba(128, 0, 255, 1) 24%,
            rgba(0, 255, 85, 1) 82%
          );
        }
      `}</style>
    </span>
  );
}
