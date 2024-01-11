import styled from "styled-components";

const PostModelContainer = styled.article`
  color: var(--cor-fonte-post);
  position: relative;
`;

const CoverImage = styled.div`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.3;
  position: absolute;
  top: 0;
  z-index: -1;
  height: 204px;

  @media (max-width: 744px) {
    height: 104px;
  }
`;

const Title = styled.h2`
  font-family: var(--fonte-secundaria);
  padding: 0 7.5rem;
  font-size: 4rem;
  display: flex;
  align-items: center;
  height: 204px;

  @media (max-width: 744px) {
    padding: 0 1rem;
    font-size: 2rem;
    height: 104px;
  }
`;

const PostContentContainer = styled.div`
  padding: 2.5rem 7.5rem 4.5rem;

  @media (max-width: 744px) {
    padding: 2rem 1rem 1.5rem;
  }
`;

export default function PostModel({children, coverImage, title}) {
  return (
    <PostModelContainer>
      <CoverImage
        style={{ backgroundImage: `url(${coverImage})` }}
      ></CoverImage>
      <Title>{title}</Title>
      <PostContentContainer>
        {children}
      </PostContentContainer>
    </PostModelContainer>
  );
}
