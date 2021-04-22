import { h, Component } from "../../lib.ts";
import { Header, Content, Footer, Container } from "../../components/layout.tsx";

export const A: Component = () => {
  return (
    <Container>
      <Header title="Article A" />
      <Content>
        This is blog article.<br/>
        <b>Bold</b> text.
      </Content>
      <Footer />
    </Container>
  );
}
