import { h, Component } from "../../lib.ts";
import { Header, Content, Footer, Container } from "../../components/layout.tsx";

export const B: Component = () => {
  return (
    <Container>
      <Header title="Article B" />
      <Content>
        This is blog article.<br/>
        <span style="color: red">
          Red
        </span>
        <span style="color: blue">
          Blue
        </span>
        <span style="color: green">
          Green
        </span>
      </Content>
      <Footer />
    </Container>
  );
}
