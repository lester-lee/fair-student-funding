import * as React from 'react';
import styled from '@emotion/styled';

const Viz = styled('div')`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  margin: 0;
  padding: 0;
  padding-top: 10vh;

  display: flex;
  justify-content: center;
`;

const WaffleChart = styled('figure')`
  width: 80vw;
  max-width: 300px;
  height: 80vw;
  max-height: 300px;

  display: grid;
  grid-template: repeat(10, 1fr) / repeat(10, 1fr);
  gap: 2px;

  border: 5px solid #333;
  padding: 2px;
  margin: 0;
`;

const Waffle = styled('div')`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  transition: all 500ms;
  &:hover {
    cursor: pointer;
  }
`;

//====================
// Data Progression
//====================

type Waffle = [category: string, color: string, count: number];
const waffleData: Waffle[][] = [
  [['all', `var(--dark-blue)`, 100]],
  [
    ['city', `var(--dark-blue)`, 51],
    ['state', `var(--dark-blue)`, 34],
    ['federal', `var(--dark-blue)`, 15],
  ],
  [
    ['operating-budget', `var(--dark-blue)`, 80],
    ['debt', `var(--red)`, 20],
  ],
  [
    ['teachers', 'var(--dark-blue)', 40],
    ['administration', 'var(--dark-blue)', 8],
    ['transportation', 'var(--dark-blue)', 4],
    ['food', 'var(--dark-blue)', 3],
    ['building', 'var(--dark-blue)', 2],
    ['operating-budget', 'var(--dark-blue)', 23],
  ],
  [['district', 'var(--dark-blue)', 50]],
  [['district', 'var(--dark-blue)', 50]],
  [
    ['fsf', 'var(--orange)', 26],
    ['district', 'var(--dark-blue)', 24],
  ],
  [['fsf', 'var(--orange)', 26]],
  [['fsf', 'var(--orange)', 26]],
];

// Convert active page waffle data into array of colors
const getWaffles = (pageIdx: number) => {
  if (pageIdx >= waffleData.length) return [];
  const rawWaffles = waffleData[pageIdx];
  const waffles: Waffle[] = Array(100).fill(['', `var(--light-gray)`, 0]);
  let i = 0;
  rawWaffles?.forEach((waffle: Waffle) => {
    for (let j = 0; j < waffle[2]; j++) {
      waffles[99 - i++] = waffle;
    }
  });

  return waffles;
};

// Return the first index where the color is different
const getIndexOfFirstDifference = (
  prevWaffles: Waffle[],
  waffles: Waffle[]
) => {
  let i = 0;
  while (
    i < prevWaffles.length &&
    i < waffles.length &&
    prevWaffles[i][1] == waffles[i][1]
  ) {
    i++;
  }
  return i;
};

//====================
// Markup
//====================

type Props = {
  activePage: number;
  previousPage: number;
};

const Visualization = ({ activePage, previousPage }: Props) => {
  // Find where the colors are changing
  const prevWaffles = getWaffles(previousPage);
  const waffles = getWaffles(activePage);
  const differentIdx = getIndexOfFirstDifference(prevWaffles, waffles);

  return (
    <Viz>
      <WaffleChart>
        {waffles.map(([category, color], i) => (
          <Waffle
            className={category}
            color={color}
            key={i}
            style={{
              transitionDelay: `${Math.max(0, (i - differentIdx) * 20)}ms`,
            }}
          />
        ))}
      </WaffleChart>
    </Viz>
  );
};

export default Visualization;
