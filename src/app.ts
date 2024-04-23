function CustomElement(params: string) {
  return function name(constructor: typeof HTMLElement) {
    customElements.define(params, constructor);
  };
}

@CustomElement("demo-test")
class Demo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "Depuis la classe Demo";
  }
}
