import * as React from 'react';
import styled from '@emotion/styled';
import { read } from 'fs';

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

type NavItemProps = {
  status: string;
};

const NavItem = styled('li')`
  flex: 1;
  background: ${(props: NavItemProps) => {
    if (props.status === 'unread') {
      return 'var(--scale2)';
    } else {
      return 'var(--scale1);';
    }
  }};

  transition: all 0.5s;

  :hover {
    background: var(--scale3);
  }
`;

/**
 * Scroll to page {i}
 */
const onNavItemClick = (i: number) => {
  const article = document.querySelector('article');
  if (!article) return;
  const pageHeight = article.offsetHeight;
  article.scrollTo({
    top: pageHeight * i,
    behavior: 'smooth',
  });
};

type Props = {
  activePage: number;
  numPages: number;
};

const Nav = ({ activePage, numPages }: Props) => {
  return (
    <Navbar>
      <ol>
        {Array.from({ length: numPages }, (_, i) => {
          const status = i > activePage ? 'unread' : 'read';
          return (
            <NavItem
              key={i}
              status={status}
              onClick={() => onNavItemClick(i)}
            />
          );
        })}
      </ol>
    </Navbar>
  );
};

export default Nav;
