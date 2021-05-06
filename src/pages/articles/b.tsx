import { Component, h } from "../../lib.ts";
import {
  Container,
  Content,
  Footer,
  Header,
} from "../../components/layout.tsx";

export const B: Component = () => {
  return (
    <Container>
      <Header title="Article B" />
      <Content>
        This is blog article.<br />
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
};
