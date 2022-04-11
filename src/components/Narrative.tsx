import * as React from "react";
import styled from "@emotion/styled";

import { NARRATIVE } from "../constants/copy";

const Article = styled("article")`
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
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
    margin: 0 0 .8rem 0;
  }
  p {
    margin: 0;
  }
  padding: 10%;
`;

const Narrative = () => {
  return (
    <Article>
      {NARRATIVE.map((card) => (
        <Page>
          <Card>
            {card.title && <h1>{card.title}</h1>}
            <p>{card.body}</p>
          </Card>
        </Page>
      ))}
    </Article>
  );
};

export default Narrative;
