import { serve } from "./mod.ts";
import { Index } from "./pages/index.tsx";
import { About } from "./pages/about.tsx";
import { A } from "./pages/articles/a.tsx";
import { B } from "./pages/articles/b.tsx";
import { C } from "./pages/articles/c.tsx";

import { renderAsString, h } from "./lib.ts";
import { Container, Content, Footer, Header } from "./components/layout.tsx";

const server = serve({ port: 8000 });
const router = [
  { url: "/", Component: Index },
  { url: "/about", Component: About },
  { url: "/articles/a", Component: A },
  { url: "/articles/b", Component: B },
  { url: "/articles/c", Component: C },
];

const NotFound = () => {
  return (
    <Container>
      <Header title="Page not found."></Header>
      <Content>
        404
      </Content>
      <Footer />
    </Container>
  );
}

for await (const req of server) {
  const { Component } = router.find(({ url }) => req.url === url) ?? { Component: NotFound }
  const body = renderAsString(
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Document</title>
    </head>
    <body>
      <Component />
    </body>
    </html>
  );
  const headers = new Headers();
  headers.append("content-type", "text/html");
  await req.respond({ status: 200, headers, body })
}
