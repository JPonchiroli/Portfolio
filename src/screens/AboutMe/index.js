import styled from "styled-components";
import PostModel from "components/PostModel";
import coverImage from "assets/sobre_mim_capa.png";
import AboutMeProfile from "assets/about-me-profile.png";

const Caption = styled.h3`
  margin-bottom: 2rem;
  font-size: 2.5rem;

  @media (max-width: 744px) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ImageProfile = styled.img`
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
  width: 40vw;
  float: right;

  @media (max-width: 1100px) {
    float: none;
    display: block;
    margin: 0 auto 2rem;
    width: 70vw;
  }

  @media (max-width: 744px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  text-align: justify;
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;

  @media (max-width: 1100px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 744px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;

export default function AboutMe() {
  return (
    <PostModel coverImage={coverImage} title="About Me">
      <Caption>Hello I'm João Ponchiroli</Caption>
      <ImageProfile src={AboutMeProfile} alt="About Me Profile" />
      <Paragraph>
        I'm embarking on my professional journey in IT. In 2021, I started my
        programming journey through a technical course in Systems Analysis and
        Development. Since then, I've been diving head first into this
        fascinating universe, seeking to learn as much as possible.
      </Paragraph>
      <Paragraph>
        Eager for more learning, I'm about to start a Systems Analysis and
        Development Technologist in 2024. I can't wait to further expand my
        knowledge and skills.
      </Paragraph>
      <Paragraph>
        With a diverse set of skills including web and mobile application
        development, database management, and team collaboration using Git, I am
        determined to contribute meaningfully to the world of technology.
      </Paragraph>
      <Paragraph>
        I am ready to face new challenges and eager to enter the job market,
        where I can apply my passion for programming and add value to innovative
        projects.
      </Paragraph>
    </PostModel>
  );
}
