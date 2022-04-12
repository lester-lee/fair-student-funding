import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Viz = styled("div")`
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
  grid-template: repeat(10,1fr) / repeat(10,1fr);
  gap: 2px;
`;

const Percent = styled("div")`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 2px;
`;

//====================
// Progression of Data
//====================
const pages = [
  [{ color: "#bbb", count: 100 }],
  [{ color: "#bbb", count: 80 }, { color: "red", count: 20 }],
  [{ color: "#bbb", count: 30 }, { color: "#ccc", count: 30 }, { color: "#777", count: 20 }],
]


type Props = {
  page: number,
}

const Visualization = ({ page }: Props) => {

  const currentPage = pages[page];

  const points: { color: string }[] = [];
  currentPage?.forEach((info, i) => {
    for (let j = 0; j < info.count; j++) {
      points.push({ color: info.color });
    }
  });

  return <Viz>
    {page}
    <TransitionGroup timeout={250} css={css`${Container};`} component="figure">
      {points.map((point, i) => (
        <CSSTransition timeout={250}>
          <Percent color={point.color} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </Viz>;
};

export default Visualization;
