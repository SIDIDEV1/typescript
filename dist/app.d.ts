declare function CustomElement(params: string): (constructor: typeof HTMLElement) => void;
declare class Demo extends HTMLElement {
    connectedCallback(): void;
}
