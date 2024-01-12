import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPost = styled.div`
  text-align: center;
  width: 282px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-bottom: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: translate(0, -1rem);
  }

  @media (max-width: 1100px) {
    width: 336px;
  }

  @media (max-width: 770px) {
    margin-top: 20px;
  }
`;

const Cover = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  font-family: var(--fonte-secundaria);
  font-size: 1.25rem;
  color: var(--azul-escuro);
  line-height: 1.75rem;
  margin: 1.5rem 0 1.75rem;

  @media (max-width: 1100px) {
    font-weight: 600;
  }
`;

const ButtonRead = styled.button`
  display: inline-block;
  border-radius: 24px;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  line-height: 1.125rem;
  background-color: var(--azul-medio);
  color: var(--branco);
  border: 3px solid var(--azul-medio);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border: 2px solid var(--azul-escuro);
  }

  @media (max-width: 1100px) {
    padding: 0.6875rem 1.5rem;
    font-size: 1.375rem;
  }
`;

export default function PostCard({ post }) {
  return (
    <div>
      <Link to={`/posts/${post.id}`}>
        <StyledPost>
          <Cover
            src={`/assets/posts/${post.id}/capa.png`}
            alt="Cover of the Project"
          />
          <Title>{post.titulo}</Title>
          <ButtonRead>Read More</ButtonRead>
        </StyledPost>
      </Link>
    </div>
  );
}
