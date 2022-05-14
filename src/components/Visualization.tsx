import * as React from "react";
import styled from "@emotion/styled";

const Viz = styled("div")`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  margin: 0;
  padding: 0;
  padding-top: 12.5vh;

  display: flex;
  justify-content: center;
`;

const boxWidth = 30;
const gap = 1;
const WaffleChart = styled("figure")`
  width: 70vw;
  max-width: ${10 * boxWidth + 11 * gap}px;
  height: 70vw;
  max-height: ${10 * boxWidth + 11 * gap}px;

  display: grid;
  grid-template: repeat(10, 1fr) / repeat(10, 1fr);
  gap: ${gap}px;

  border: 5px solid
    ${(props: { border: boolean }) =>
      props.border ? "var(--text-color)" : "var(--bg)"};
  border-radius: 3px;
  padding: ${gap + 3}px;
  margin: 0;

  transition: border 0.5s;
`;

const Waffle = styled("div")`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  transition: all 500ms;
  :hover {
    cursor: pointer;
  }
`;

//====================
// Data Progression
//====================

type Waffle = [category: string, color: string, count: number];

const schoolArt: Waffle[] = [
  ["title-art", "var(--school)", 4],
  ["title-art", "var(--door)", 2],
  ["title-art", "var(--school)", 5],
  ["title-art", "var(--window)", 1],
  ["title-art", "var(--school)", 2],
  ["title-art", "var(--door)", 2],
  ["title-art", "var(--school)", 2],
  ["title-art", "var(--window)", 1],
  ["title-art", "var(--school)", 12],
  ["title-art", "var(--window)", 1],
  ["title-art", "var(--school)", 2],
  ["title-art", "var(--window)", 2],
  ["title-art", "var(--school)", 2],
  ["title-art", "var(--window)", 1],
  ["title-art", "var(--school)", 11],
  ["title-art", "var(--sky)", 3],
  ["title-art", "var(--school)", 1],
  ["title-art", "var(--window)", 2],
  ["title-art", "var(--school)", 1],
  ["title-art", "var(--sky)", 6],
  ["title-art", "var(--school)", 4],
  ["title-art", "var(--sky)", 6],
  ["title-art", "var(--school)", 4],
  ["title-art", "var(--sky)", 23],
];

const ellipsesArt: Waffle[] = [
  ["", "var(--empty)", 11],
  ["ellipse-dark", "var(--ellipse-dark)", 1],
  ["", "var(--empty)", 1],
  ["ellipse-dark", "var(--ellipse-dark)", 1],
  ["", "var(--empty)", 1],
  ["ellipse-dark", "var(--ellipse-dark)", 1],
  ["", "var(--empty)", 1],
];

// Creates the random mural for the "bureaucracy" page
const generateRandomMural = () => {
  // Create random hex code w/ values between low-high
  const generateColor = (low: number, high: number) => {
    const rgb = Array.from({ length: 3 }, () => {
      const x = Math.floor(low + Math.random() * (high - low));
      return x.toString(16).padStart(2, "0");
    });

    return "#" + rgb.join("");
  };

  let numWaffles = 0;
  const waffles: Waffle[] = [];
  while (numWaffles < 100) {
    // Generate run of a random color waffle
    const runLength = Math.min(100 - numWaffles, Math.random() * 10);
    const randomColor = generateColor(50, 199);
    waffles.push(["", randomColor, runLength]);
    numWaffles += runLength;
  }
  return waffles;
};

const questionArt: Waffle[] = [
  ["question-bg", "var(--question-bg)", 14],
  ["question-fg", "var(--question-fg)", 2],
  ["question-bg", "var(--question-bg)", 18],
  ["question-fg", "var(--question-fg)", 2],
  ["question-bg", "var(--question-bg)", 7],
  ["question-fg", "var(--question-fg)", 2],
  ["question-bg", "var(--question-bg)", 7],
  ["question-fg", "var(--question-fg)", 2],
  ["question-bg", "var(--question-bg)", 2],
  ["question-fg", "var(--question-fg)", 2],
  ["question-bg", "var(--question-bg)", 4],
  ["question-fg", "var(--question-fg)", 2],
  ["question-bg", "var(--question-bg)", 2],
  ["question-fg", "var(--question-fg)", 2],
  ["question-bg", "var(--question-bg)", 4],
  ["question-fg", "var(--question-fg)", 2],
  ["question-bg", "var(--question-bg)", 3],
  ["question-fg", "var(--question-fg)", 1],
  ["question-bg", "var(--question-bg)", 5],
  ["question-fg", "var(--question-fg)", 4],
  ["question-bg", "var(--question-bg)", 13],
];

const waffleData: Waffle[][] = [
  schoolArt,
  schoolArt,
  schoolArt,
  schoolArt,
  [["all", `var(--base)`, 100]],
  [
    ["federal", `var(--federal)`, 15],
    ["state", `var(--state)`, 34],
    ["city", `var(--city)`, 51],
  ],
  [
    ["operating-budget", `var(--operating-budget)`, 80],
    ["debt", `var(--debt)`, 20],
  ],
  [
    ["transportation", "var(--transportation)", 4],
    ["food", "var(--food)", 3],
    ["admin", "var(--admin)", 8],
    ["operating-budget", "var(--operating-budget)", 25],
    ["teachers", "var(--teachers)", 40],
  ],
  [["district", "var(--district)", 50]],
  [["district", "var(--district)", 50]],
  [
    ["fsf", "var(--fsf)", 26],
    ["district", "var(--district)", 24],
  ],
  [["fsf", "var(--fsf)", 26]],
  [["fsf", "var(--fsf)", 100]],
  [
    ["fsf-base", "var(--fsf-base)", 5],
    ["fsf", "var(--fsf)", 95],
  ],
  [
    ["fsf-grade", "var(--fsf-grade)", 60],
    ["fsf-add", "var(--fsf-add)", 40],
  ],
  [
    ["fsf-grade", "var(--fsf-grade)", 21],
    ["fsf-add", "var(--fsf-add)", 8],
    ["blank", "#fff", 71],
  ],
  [
    ["fsf-grade", "var(--fsf-grade)", 20],
    ["fsf-add2", "var(--fsf-add2)", 8],
    ["fsf-add", "var(--fsf-add)", 5],
    ["blank", "#fff", 67],
  ],
  [["fsf", "var(--fsf)", 100]],
  [
    ["fsf", "var(--fsf)", 26],
    ["operating-budget", "var(--operating-budget)", 54],
  ],
  ellipsesArt,
  ellipsesArt,
  generateRandomMural(),
  questionArt,
  questionArt,
  schoolArt,
];

// Indexes of which page should have borders around waffle
const hasBorder = [4, 5, 6, 7, 8, 9, 10, 11, 14, 18];

// Convert active page waffle data into array of colors
const getWaffles = (pageIdx: number) => {
  if (pageIdx >= waffleData.length) return [];
  const rawWaffles = waffleData[pageIdx];
  const waffles: Waffle[] = Array(100).fill(["", `var(--empty)`, 0]);
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
  const border = hasBorder.includes(activePage);

  return (
    <Viz>
      <WaffleChart border={border}>
        {waffles.map(([category, color], i) => (
          <Waffle
            className={category}
            color={color}
            key={i}
            style={{
              transitionDelay: `${Math.max(0, (i - differentIdx) * 10)}ms`,
            }}
          />
        ))}
      </WaffleChart>
    </Viz>
  );
};

export default Visualization;
