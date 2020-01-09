import React from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { VisuallyHidden } from './VisuallyHidden';
import { Logotype } from './Logotype';
import { GridInner } from './Grid';

const Title = styled.h1`
  width: 100%;
  padding: 1rem;
`;

const Nav = styled.nav`
  width: 100%;
  padding: 1rem;
`;

const NavLink = styled(RouterNavLink)`
  &.active {
    font-weight: 700;
  }
`;

export const Header: React.FC<Props> = ({ navLinks }) => {
  return (
    <GridInner as="header">
      <Title>
        <Link to="/">
          <VisuallyHidden>Shuffle</VisuallyHidden>
          <Logotype />
        </Link>
      </Title>

      <Nav>
        <ul>
          {navLinks.map(
            ({ path, label }) =>
              path !== '/' && (
                <li key={path}>
                  <NavLink to={path}>{label}</NavLink>
                </li>
              ),
          )}
        </ul>
      </Nav>
    </GridInner>
  );
};

interface Props {
  navLinks: { path: string; label: React.ReactNode }[];
}
