import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background-color: var(--azul-escuro);
  color: var(--branco);
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: .5rem;
`

export default function Footer() {
  return (
    <StyledFooter>
      <MarcaRegistrada />
      Developed in Collaboration with Alura.
    </StyledFooter>
  )
}