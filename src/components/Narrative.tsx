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

const ABOUT = (
  <Page
    id="about"
    title="About This Project"
    vspace={false}
    body={`
    Hi! I'm <a href="https://www.lester-lee.com">Lester Lee</a>, and this is my final project for a Spring 2022 course in the <a href="https://www.gc.cuny.edu/data-analysis-and-visualization">M.S. Data Analysis & Visualization</a> program at the CUNY Graduate Center. Thanks for reading!
      <h2>About the Data</h2>
      All of my numbers are sourced from <a href="https://www.schools.nyc.gov/about-us/funding/funding-our-schools">schools.nyc.gov</a>. The <a href="https://infohub.nyced.org/reports/financial/financial-data-and-reports">InfoHub</a> was very helpful, but there was a lot of sifting through slideshows and memoranda as well for data that wasn't as immediately accessible.
    `}
  />
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
      {ABOUT}
    </Article>
  );
};

export default Narrative;
