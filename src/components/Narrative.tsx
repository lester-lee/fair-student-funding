import * as React from "react";
import styled from "@emotion/styled";

import { NARRATIVE } from "../constants/copy";
import parse from "html-react-parser";

const Article = styled("article")`
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  z-index: -1;
`;

const Page = styled("section")`
  height: 100vh;
  scroll-snap-align: start;
  flex: none;

  display: flex;
  justify-content: center;
  // align-items: flex-end;
`;

const Card = styled("div")`
  background: #fff;
  font-family: Ubuntu;
  margin-top: 60vh;
  h1 {
    text-transform: capitalize;
    text-align: center;
    margin: 0 0 0.8rem 0;
  }
  p {
    margin: 0;
  }
  padding: 10%;
  z-index: 99;
`;

type Props = {
  onScroll: () => void;
};

const Narrative = ({ onScroll }: Props) => {
  return (
    <Article onScroll={onScroll}>
      {NARRATIVE.map((page, i) => (
        <Page key={i}>
          <Card>
            {page.title && <h1>{page.title}</h1>}
            <p>{parse(page.body)}</p>
          </Card>
        </Page>
      ))}
    </Article>
  );
};

export default Narrative;
