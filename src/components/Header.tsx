import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, MenuList, MenuButton, MenuLink } from '@reach/menu-button';
import '@reach/menu-button/styles.css';
import { VisuallyHidden } from './VisuallyHidden';
import { Logotype } from './Logotype';
import { Grid, GridInner } from './Grid';
import { ArrowRight } from './Icons';

const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledMenuButton = styled(MenuButton)`
  display: block;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const Header: React.FC<Props> = ({ navLinks }) => {
  return (
    <Grid as="header" columns="6rem auto" rows="6rem">
      <GridInner>
        <h1>
          <Link to="/">
            <VisuallyHidden>Shuffle</VisuallyHidden>
            <Logotype />
          </Link>
        </h1>
      </GridInner>

      <GridInner>
        <Nav>
          <Menu>
            <StyledMenuButton>
              <VisuallyHidden>Go to</VisuallyHidden>
              <ArrowRight />
            </StyledMenuButton>
            <MenuList>
              {navLinks.map(({ path, label }) => {
                return (
                  // @ts-ignore
                  <MenuLink key={path} as={NavLink} to={path}>
                    {label}
                  </MenuLink>
                );
              })}
            </MenuList>
          </Menu>
        </Nav>
      </GridInner>
    </Grid>
  );
};

interface Props {
  navLinks: { path: string; label: React.ReactNode }[];
}
