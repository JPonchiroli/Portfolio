import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const PostContainer = styled.div`
  h3, h4, h5, h6 {
    font-family: var(--fonte-secundaria);
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  h4 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  p {
    text-align: justify;
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-bottom: 1.5rem;
  }

  a {
    color: #0493d4;
    text-decoration: underline;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  ul {
    font-size: 1.5rem;
  }

  ul > li {
    margin-bottom: 1rem;
    list-style: disc;
  }

  pre, blockquote {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background-color: #eaeaea;
    border-radius: 5px;
  }

  pre {
    overflow-x: auto;
  }

  @media (max-width: 1100px) {
    p {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 744px) {
    h3 {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.75rem;
    }
  }
`


export default function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });


  if(!post){ 
    return <h1>Post not Found...</h1>
  }

  return (
    <PostModel
      coverImage={`/assets/posts/${post.id}/capa.png`}
      title={post.titulo}
    >
      <PostContainer>
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </PostContainer>
    </PostModel>
  );
}
