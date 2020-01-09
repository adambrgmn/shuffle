import React, { useState } from 'react';
import styled from 'styled-components';
import { useInterval } from '@fransvilhelm/hooks';
import { shuffle } from 'lodash-es';

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
`;

const Line = styled.rect`
  transition: all 0.3s ease-in-out;
`;

export const Logotype: React.FC = () => {
  const [lines, setLines] = useState([0, 1, 2, 3]);

  const shuffleLines = () => {
    setLines(shuffle(lines));
  };

  useInterval(shuffleLines, 5000);

  return (
    <Svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={shuffleLines}
    >
      <rect width="48" height="48" rx="4" fill="black" />
      {lines.map((int, idx) => (
        <Line
          key={idx}
          x="8"
          y={10 + 8 * int}
          width="32"
          height="4"
          rx="1"
          fill="white"
        />
      ))}
    </Svg>
  );
};
