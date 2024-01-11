import styled from "styled-components";
import MenuLink from "../MenuLink";

const StyledNav = styled.nav`
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
`;

export default function Menu() {
  return (
    <header>
      <StyledNav>
        <MenuLink to='/'>Home</MenuLink>
        <MenuLink to='/aboutMe'>About Me</MenuLink>
      </StyledNav>
    </header>
  );
}
