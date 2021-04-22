import { h, Component } from "../lib.ts";
import { Header, Content, Footer, Container } from "../components/layout.tsx";

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
}
