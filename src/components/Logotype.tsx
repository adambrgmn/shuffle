import React, { useState } from 'react';
import styled from 'styled-components';
import { useInterval } from '@fransvilhelm/hooks';

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
`;

const Line = styled.rect<{ idx: number }>`
  transition: y 1s ease-in-out;
  transition-delay: ${({ idx }) => idx * 0.3}s;
`;

export const Logotype: React.FC = () => {
  const [lines, setLines] = useState([0, 1, 2]);
  const start = 10;
  const multiplier = 12;

  const shuffleLines = () => {
    const [head, ...rest] = lines;
    setLines([...rest, head]);
  };

  useInterval(shuffleLines, 5000);

  return (
    <Svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="4" fill="black" />
      <g>
        {lines.map((int, idx) => (
          <Line
            key={idx}
            idx={int}
            x="8"
            y={start + int * multiplier}
            width="32"
            height="4"
            rx="1"
            fill="white"
          />
        ))}
      </g>
    </Svg>
  );
};
