import * as React from "react";
import styled from "@emotion/styled";
import parse from "html-react-parser";

import { NARRATIVE } from "../constants/copy";
import Title from "./Title";
import Introduction from "./Introduction";
import Page from "./Page";

const Article = styled("article")`
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;

  padding: 0 15vw;
`;

type Props = {
  onScroll: () => void;
};

const Narrative = ({ onScroll }: Props) => {
  return (
    <Article onScroll={onScroll}>
      <Title/>
      <Introduction />

      {NARRATIVE.map((page, i) => (
        <Page key={i} title={page.title} body={parse(page.body)} />
      ))}
    </Article>
  );
};

export default Narrative;
