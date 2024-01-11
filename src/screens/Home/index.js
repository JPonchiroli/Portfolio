import styled from "styled-components";
import posts from "json/posts.json";
import Post from "components/PostCard";

const StyledUl = styled.ul`
  padding: 0 6vw 3.625rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: -2.5rem
  }

  @media (max-width: 1100px) {
    margin-top: 0;
    padding: 2rem 1.5rem 3.625rem;
  }

  @media (max-width: 744px) {
    padding: 2rem 1rem 3rem;
  }
`;

export default function Home() {
  return (
      <StyledUl>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post}/>
          </li>
        ))}
      </StyledUl>
  );
}
