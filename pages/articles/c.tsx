import { h, Component } from "../../lib.ts";
import { Header, Content, Footer, Container } from "../../components/layout.tsx";

export const C: Component = () => {
  return (
    <Container>
      <Header title="Article C" />
      <Content>
        This is blog article.<br/>
        <b>Bold</b> text.
      </Content>
      <Footer />
    </Container>
  );
}
