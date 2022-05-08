import * as React from "react";
import styled from "@emotion/styled";

import { NARRATIVE } from "../constants/copy";
import Page from "./Page";

const Article = styled("article")`
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

const TITLE = (
  <Page id="title" title={"An Exploration of NYC School Budgets"} />
);

const INTRODUCTION = (
  <>
    <Page
      title="Introduction"
      body={`I grew up in NYC public schools, from pre-K through high school, and it was something I had always taken for granted. It was not until I became a high school teacher myself that I began to question the intricate—and obfuscated—inner workings of public education.`}
    />
    <Page
      title="Introduction"
      body={`How much money is actually spent each year? How is it being spent? Is there not enough money, or is it being poorly managed? I did not have concrete numbers for any of these questions, so I did some digging to see what I could find and learn.`}
    />
    <Page
      title="Introduction"
      body={`I'm not an expert, and this project is mainly an educational tool for myself. I want to emphasize that this is nowhere near comprehensive, but I hope that these numbers provide a good starting place for anyone looking to learn more.`}
    />
  </>
);

type Props = {
  onScroll: (event: React.UIEvent<HTMLElement>) => void;
};

const Narrative = ({ onScroll }: Props) => {
  return (
    <Article onScroll={onScroll}>
      {TITLE}
      {INTRODUCTION}
      {NARRATIVE.map((page, i) => (
        <Page key={i} title={page.title} body={page.body} />
      ))}
    </Article>
  );
};

export default Narrative;
