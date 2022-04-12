import * as React from "react";
import styled, { StyledComponent } from "@emotion/styled";

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

const Container = styled("figure")`
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

const Square = styled("div")`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
  margin: 2px;
`;

//====================
// Progression of Data
//====================
const pages = [
  [{color: "#bbb", count: 100}],
  [{color: "red", count:20}, {color: "#bbb", count: 80}],
]


type Props = {
  page: number,
}

const Visualization = ({ page }: Props) => {

  const currentPage = pages[page];

  // List of StyledComponents
  // Couldn't figure out types so using any[] instead
  const squares: any[] = [];
  currentPage?.forEach((info, i) => {
    for (let j = 0; j < info.count; j++) {
      squares.push(<Square color={info.color} key={"" + i + j}></Square>)
    }
  });

  return <Viz>
    {page}
    <Container>
      {squares}
    </Container>
  </Viz>;
};

export default Visualization;
