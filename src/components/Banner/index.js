import styled from "styled-components";
import colorfulCircle from "assets/circulo_colorido.png";
import profile from "assets/profile.jpeg";

const StyledBanner = styled.div`
  padding: 3rem 7.5rem 6.25rem;
  background-color: var(--azul-escuro);
  color: var(--branco);
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1100px) {
    padding: 3.5rem 1.5rem;
  }

  @media (max-width: 744px) {
    padding: 2rem 1rem;
    display: block;
  }
`;

const Title = styled.h1`
  font-family: var(--fonte-secundaria);
  font-size: 4rem;
  margin-top: 4.875rem;
  margin-bottom: 2rem;

  @media (max-width: 1100px) {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 744px) {
    margin-bottom: 2rem;
  }
`;

const StyledParagraph = styled.p`
  font-family: var(--fonte-secundaria);
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1100px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 744px) {
    margin-bottom: 2rem;
  }
`;

const ImagesContainer = styled.div`
  position: relative;
  height: 406px;

  @media (max-width: 1100px) {
    height: 338px;
  }

  @media (max-width: 744px) {
    height: 307px;
  }
`;

const ProfileImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 18vw;
  border-radius: 50%;

  @media (max-width: 1100px) {
    width: 25vw;
  }

  @media (max-width: 744px) {
    width: 170px;
    transform: translate(5rem, 0px);
    left: 70px
  }
`;

const StyledColorfulCircle = styled.img`
  position: absolute;
  right: 7vw;
  bottom: 2.2vw;
  width: 25vw;

  @media (max-width: 1100px) {
    right: 10vw;
    width: 35vw;
  }

  @media (max-width: 744px) {
    width: 200px;
    transform: translate(-1.5rem, 0px);
    left: 100px
  }
`;

export default function Banner() {
  return (
    <StyledBanner>
      <div>
        <Title>Hello World</Title>
        <StyledParagraph>
          Welcome to my Portfolio. My name is João Ponchiroli and here i share
          my knowledge in programming. I hope that you enjoy :)
        </StyledParagraph>
      </div>

      <ImagesContainer>
        <StyledColorfulCircle
          src={colorfulCircle}
          alt="Colorful Circle"
          aria-hidden={true}
        />

        <ProfileImage src={profile} alt="Profile" />
      </ImagesContainer>
    </StyledBanner>
  );
}
