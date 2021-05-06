import { Component, h } from "../lib.ts";

export const Container: Component = (_, children) => {
  return (
    <div style="width: 720px; margin: auto">{children}</div>
  );
};

export const Header: Component<{ title: string }> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export const Content: Component = (_, children) => {
  return (
    <div>
      {children}
    </div>
  );
};

export const Footer: Component = () => {
  return (
    <footer>
      Powered by Deno.
    </footer>
  );
};
