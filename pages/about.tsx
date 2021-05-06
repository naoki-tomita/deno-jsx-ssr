import { Component, h } from "../lib.ts";
import { Container, Content, Footer, Header } from "../components/layout.tsx";

export const About: Component = () => {
  return (
    <Container>
      <Header title="About" />
      <Content>
        This page is rendered by Deno.
      </Content>
      <Footer />
    </Container>
  );
};
