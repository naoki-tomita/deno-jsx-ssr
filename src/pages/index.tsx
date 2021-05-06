import { Container, Content, Footer, Header } from "../components/layout.tsx";
import { Component, h } from "../lib.ts";

export const Index: Component = () => {
  return (
    <Container>
      <Header title="Welcome to my homepage." />
      <Content>
        <h2>pages</h2>
        <ul>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/articles/a">article a</a>
          </li>
          <li>
            <a href="/articles/b">article b</a>
          </li>
          <li>
            <a href="/articles/c">article c</a>
          </li>
        </ul>
      </Content>
      <Footer />
    </Container>
  );
};
