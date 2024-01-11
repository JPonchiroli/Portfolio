import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledLink = styled(Link)`
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: var(--cor-fonte-principal);
  text-decoration: none;

  ${({ isActive }) =>
    isActive &&
    `
    text-decoration: underline;
  `}
`;

export default function MenuLink({children, to}) {
  const { pathname } = useLocation();

  return (
    <StyledLink isActive={pathname === to} to={to}>
      {children}
    </StyledLink>
  );
}
