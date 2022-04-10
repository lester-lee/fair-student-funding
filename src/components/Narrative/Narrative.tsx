import * as React from "react";
import styled from "@emotion/styled";

import { NARRATIVE } from "../../constants/copy";

const Article = styled("article")`
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
`;

const Page = styled("div")`
  height: 100vh;
  scroll-snap-align: start;
  flex: none;

  display: flex;
  align-items: flex-end;
`;

const Card = styled("div")``;

const Narrative = () => {
  return (
    <Article>
      {NARRATIVE.map((card) => (
        <Page>
          <Card>
            <h1>{card.title}</h1>
            <p>{card.body}</p>
          </Card>
        </Page>
      ))}
    </Article>
  );
};

export default Narrative;
