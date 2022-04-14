import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Viz = styled('div')`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: -1;
`;

const WaffleChart = styled('figure')`
  width: 80vw;
  max-width: 300px;
  height: 80vw;
  max-height: 300px;

  margin: 5vh auto;
  margin-top: 10vh;

  display: grid;
  grid-template: repeat(10, 1fr) / repeat(10, 1fr);
  gap: 2px;

  border: 5px solid #333;
  padding: 2px;
`;

const Waffle = styled('div')`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
`;

//====================
// Data Progression
//====================

// Need better names for these lol
type Waffle = [color: string, count: number];
const waffleData: Waffle[][] = [
  [[`var(--dark-blue)`, 100]],
  [
    [`var(--dark-blue)`, 80],
    [`var(--red)`, 20],
  ],
  [[`var(--dark-blue)`, 80]],
  [
    [`var(--dark-blue)`, 53],
    [`var(--yellow)`, 21],
    [`var(--red)`, 6],
  ],
];

// Convert active page waffle data into array of colors
const getPageColors = (pageIdx: number) => {
  const waffles = waffleData[pageIdx];
  const colors = Array(100).fill(`var(--light-gray)`);
  let i = 0;
  waffles?.forEach(([color, count]) => {
    for (let j = 0; j < count; j++) {
      colors[i++] = color;
    }
  });

  return colors;
};

//====================
// Markup
//====================

type Props = {
  pageIdx: number;
};

const Visualization = ({ pageIdx }: Props) => {
  const colors = getPageColors(pageIdx);

  return (
    <Viz>
      {pageIdx}
      <WaffleChart>
        {colors.map((color) => (
          <Waffle color={color} />
        ))}
      </WaffleChart>
    </Viz>
  );
};

export default Visualization;
