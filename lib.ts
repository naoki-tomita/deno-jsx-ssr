import type {} from "./jsx.d.ts";
type Node = Element | string;
interface Element {
  tag: string;
  props: any;
  children: Node[];
}

export interface Component<T = {}> {
  (props: T, children: Node[]): Element;
}

export function h(tag: string | Component<any>, props: any, ...children: Node[]) {
  return typeof tag === "function"
    ? tag(props, children.flat())
    : { tag, props, children: children.flat() };
}

export function renderAsString(node: Node): string {
  if (typeof node === "string") return node;
  const { tag, props, children = [] } = node;
  const propsString = Object.entries<string>(props ?? {}).map(([key, value]) => (` ${key}="${value}"`)).join("");
  return (
`<${tag}${propsString}>
  ${children.map(renderAsString).join("")}
</${tag}>`
  );
}
