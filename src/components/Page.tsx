import * as React from 'react';
import styled from '@emotion/styled';
import parse from 'html-react-parser';

const FullHeightContainer = styled('section')`
  height: 100%;
  scroll-snap-align: start;
  flex: none;

  display: flex;
  justify-content: center;
`;

const Card = styled('div')`
  padding-top: 2vh;
  z-index: 3;
`;

const VerticalSpace = styled('div')`
  height: 77vw;
  max-height: 350px;
`;

const CardTitle = styled('h1')`
  text-transform: capitalize;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 15vw;
  height: 10.5vh;
`;

const CardBody = styled('p')`
  height: 50vh;
  margin: 0 15vw;
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
`;

type Props = {
  title?: string;
  body?: string;
  id?: string;
};

const Page = ({ title, body, id }: Props) => {
  return (
    <FullHeightContainer id={id}>
      <Card>
        <div>{title && <CardTitle>{title}</CardTitle>}</div>
        <VerticalSpace />
        {body && <CardBody>{parse(body)}</CardBody>}
      </Card>
    </FullHeightContainer>
  );
};

export default Page;
