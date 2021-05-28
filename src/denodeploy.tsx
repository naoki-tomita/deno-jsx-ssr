import { Index } from "./pages/index.tsx";
import { About } from "./pages/about.tsx";
import { A } from "./pages/articles/a.tsx";
import { B } from "./pages/articles/b.tsx";
import { C } from "./pages/articles/c.tsx";
import { h, renderAsString } from "./lib.ts";
import { Container, Content, Footer, Header } from "./components/layout.tsx";

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
};

addEventListener("fetch", async (event) => {
  console.log(event.request);
  const { Component } = router.find(({ url }) => event.request.url === url) ??
    { Component: NotFound };
  const body = renderAsString(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <Component />
      </body>
    </html>,
  );
  const headers = new Headers();
  headers.append("content-type", "text/html");
  await event.respondWith(new Response(body, { status: 200, headers }));
});

declare global {
  function addEventListener(name: "fetch", ev: (event: Deno.RequestEvent) => void): any;
}
