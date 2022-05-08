import * as React from "react";
import styled from "@emotion/styled";
import parse from "html-react-parser";

const Card = styled("section")`
  padding-top: 2vh;
  z-index: 3;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  flex: none;
`;

const VerticalSpace = styled("div")`
  height: 77vw;
  max-height: 350px;
`;

const CardTitle = styled("h1")`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  margin: 0 15vw;
  height: 10.5vh;
  text-transform: capitalize;
  background: var(--bg);
`;

const CardBody = styled("div")`
  height: 50vh;
  margin: 0 5% 0 8%;
  line-height: 1.25;
  background: var(--bg);

  span {
    display: inline-block;
    padding: 2px 4px;
    border-radius: 2px;

    color: var(--bg);
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--base);
  }
`;

type Props = {
  title?: string;
  body?: string;
  id?: string;
  vspace?: boolean;
};

const Page = ({ title, body, id, vspace = true }: Props) => {
  return (
    <Card id={id}>
      {title && <CardTitle>{title}</CardTitle>}
      {vspace && <VerticalSpace />}
      {body && <CardBody>{parse(body)}</CardBody>}
    </Card>
  );
};

export default Page;
