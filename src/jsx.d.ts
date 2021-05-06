export interface HTMLElement {
  style?: string;
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: HTMLElement;
      span: HTMLElement;
      a: HTMLElement & { href: string };
      b: HTMLElement;
      br: HTMLElement;
      ul: HTMLElement;
      li: HTMLElement;
      html: HTMLElement & { lang: string };
      head: HTMLElement;
      meta: HTMLElement & {
        content?: string;
        "http-equiv"?: string;
        name?: string;
        charset?: string;
      };
      title: HTMLElement;
      body: HTMLElement;
      header: HTMLElement;
      footer: HTMLElement;
      h1: HTMLElement;
      h2: HTMLElement;
    }
  }
}
