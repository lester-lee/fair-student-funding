import * as React from "react";
import styled from "@emotion/styled";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const FullHeightContainer = styled("section")`
  height: 100vh;
  scroll-snap-align: start;
  flex: none;

  display: flex;
  justify-content: center;
`;

const Card = styled("div")`
  padding-top: 2vh;
  z-index: 3;
`;

const VerticalSpace = styled("div")`
  height: 77vw;
`;

const CardTitle = styled("h1")`
  text-transform: capitalize;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0 10vw;
  height: 10.5vh;
`;

const CardBody = styled("p")`
  min-height: 40%;
  margin: 0;
  line-height: 1.25;
  background: var(--bg);
  padding-left: 3vw;

  span {
    display: inline-block;
    padding: 2px 4px;
    border-radius: 2px;

    color: var(--bg);
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`;

type Props = {
  title?: string | undefined;
  body?: string | JSX.Element | JSX.Element[];
};

const Page = ({ title, body }: Props) => {
  return (
    <FullHeightContainer>
      <Card>
        <div>{title && <CardTitle>{title}</CardTitle>}</div>
        <VerticalSpace />
        {body && <CardBody>{body}</CardBody>}
      </Card>
    </FullHeightContainer>
  );
};

export default Page;
