import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.div`
  background-color: var(--colour-5);
`;

const Ul = styled.ul`
  padding: 1.2rem;
  display: flex;
  flex-direction: row;
`;

const Li = styled.li`
  padding-left: 1.2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--colour-4);
  padding: 1.2rem;
  font-family: var(--title-font);
  font-size: 30px;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--colour-1);
  }
`;

const NavBar = () => {
  return (
    <>
      <StyledNav>
        <Ul>
          <Li>
            <StyledLink to="/">Home</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/two-panel-jacket">
              Two Panel Custom Jacket
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/three-panel-jacket">
              Three Panel Custom Jacket
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/coat">Long Custom Coat</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/help">Help</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/paint">Paint!</StyledLink>
          </Li>
        </Ul>
      </StyledNav>
    </>
  );
};

export default NavBar;
