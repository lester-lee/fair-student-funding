import * as React from "react";
import styled from "@emotion/styled";

const Navbar = styled("nav")`
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

const NavItem = styled("li")`
  margin: 0 1rem;
  text-decoration: underline;
  cursor: pointer;
`;

const scrollTo = (id: string) => () => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

const Nav = () => {
  return (
    <Navbar>
      <NavItem onClick={scrollTo("#about")}>about</NavItem>
      <NavItem onClick={scrollTo("#title")}>top</NavItem>
    </Navbar>
  );
};

export default Nav;
