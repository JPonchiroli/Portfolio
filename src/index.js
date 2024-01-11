import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "screens/Home";
import AboutMe from "screens/AboutMe";
import Menu from "components/Menu";
import Footer from "components/Footer";
import PatternPage from "components/PatternPage";
import Post from "components/Post";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --azul-escuro: #041833;
    --azul-medio: #1875E8;
    --cor-fonte-principal: #041833;
    --cor-fonte-post: #444444;
    --branco: #FFF;
    --fonte-principal: 'Raleway', sans-serif;
    --fonte-secundaria: 'Playfair Display', sans-serif;

    font-family: var(--fonte-principal);
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: minmax(0, 1fr);
    min-height: 100vh;
  }

  a, button, input, textarea {
    font: inherit;
    color: inherit;
  }

  button {
    background-color: transparent;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  h1, h2, h3 {
    font-weight: 700;
    line-height: 5rem;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PatternPage />}>
          <Route index element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/posts/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<div>Page not Found</div>} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
