/*const compteur = document.querySelector("#compteur");
let i = 0;

const increment = (e) => {
  i++;
  compteur.querySelector("span").innerHTML = i.toString();
};

compteur.addEventListener("click", increment);
*/

const a: string = "helloww";
const n: number = 1;
const b: boolean = true;
const arr: string[] = ["ok", "ok"];
const all: any[] = ["ok", 1, []];
const obj: { name?: string; age: number } = { age: 10 };
const user: { name: string; [key: string]: string | number } = {
  name: "ok",
  age: 10,
};
const date: Date = new Date();

const compteur = document.querySelector("#compteur") as HTMLElement;

const cb: Function = (e: MouseEvent): void => {};
