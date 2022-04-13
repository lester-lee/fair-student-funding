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

const Container = css`
	width: 80vw;
	max-width: 300px;
	height: 80vw;
	max-height: 300px;

	margin: 5vh auto;
	margin-top: 10vh;

	display: grid;
	grid-template: repeat(10, 1fr) / repeat(10, 1fr);
	gap: 2px;
`;

const Percent = styled('div')`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 2px;
`;

//====================
// Data Progression
//====================
const pages = [
  [{ color: '#bbb', count: 100 }],
  [
    { color: '#bbb', count: 80 },
    { color: 'red', count: 20 },
  ],
  [
    { color: '#bbb', count: 30 },
    { color: '#ccc', count: 30 },
    { color: '#777', count: 20 },
  ],
];

// Take the active page and return array of points
const constructPoints = (pageIdx: number) => {
  const activePage = pages[pageIdx];

  let points: { color: string }[] = [];
  activePage?.forEach((info, i) => {
    for (let j = 0; j < info.count; j++) {
      points.push({ color: info.color });
    }
  });
  return points;
};

//====================
// Markup
//====================

type Props = {
  pageIdx: number;
};

/*

    <Container>
      {points.map((point, i) => (
        <Transition timeout={duration}>
          {state => <Percent
            color={point.color}
            style={{
              ...defaultPercentStyle,
              // ...percentTransitions[String(state)]
            }} />}
        </Transition>
      ))}
    </Container>
*/

const Visualization = ({ pageIdx }: Props) => {
  const points = constructPoints(pageIdx);

  return <Viz>{pageIdx}</Viz>;
};

export default Visualization;
