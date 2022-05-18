import * as React from 'react';
import styled from '@emotion/styled';

const _Navbar = styled('nav')`
  position: fixed;
  bottom: 0;
  z-index: 4;

  width: 100%;
  padding: 1% 0;
  padding-bottom: 1%;

  display: flex;
  justify-content: center;

  background: var(--bg);

  list-style-type: none;
`;

const _NavItem = styled('li')`
  margin: 0 1rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Navbar = styled('nav')`
  width: 100%;
  height: 1%;
  position: fixed;
  bottom: 0;
  z-index: 4;

  :hover {
    height: 2%;
    cursor: pointer;
  }

  ol {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    list-style-type: none;


    display: flex;
    flex-flow: row nowrap;
  }
`;

const NavItem = styled('li')`
  flex: 1;
  background: var(--scale1);
  :hover{
    background: var(--scale2);
  }
`;

const scrollTo = (id: string) => () => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
};

type Props = {
  activePage: number;
  numPages: number;
};

const _Nav = ({ activePage, numPages }: Props) => {
  return (
    <Navbar>
      <NavItem onClick={scrollTo('#about')}>about</NavItem>
      <NavItem onClick={scrollTo('#title')}>top</NavItem>
    </Navbar>
  );
};

const Nav = ({ activePage, numPages }: Props) => {
  return (
    <Navbar>
      <ol>
        {Array.from({ length: activePage - 1 }, (_, i) => (
          <NavItem key={i} />
        ))}
        <NavItem key={activePage} />
        {Array.from({ length: numPages - activePage }, (_, i) => (
          <NavItem key={activePage + i} />
        ))}
      </ol>
    </Navbar>
  );
};

export default Nav;
