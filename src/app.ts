const compteur = document.querySelector("#compteur") as HTMLElement;
let i = 0;

const increment = (e: Event) => {
  e.preventDefault();
  i++;
  const span = compteur.querySelector("span");
  span ? (span.innerHTML = i.toString()) : "";
};

compteur.addEventListener("click", increment);

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "ok",
  age: 10,
};

function identity<ArgType>(arg: ArgType): ArgType {
  return arg;
}

const aa = identity<number>(3);

function tablee<Type>(arg: Type[]): Type {
  return arg[0];
}

const aaa = tablee(["hellow", 1, false]);

function namefn<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

const aasa = namefn([3, ""]);
