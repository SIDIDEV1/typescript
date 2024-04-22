const compteur = document.querySelector("#compteur") as HTMLElement;
let i = 0;

const increment = (e: Event) => {
  e.preventDefault();
  i++;
  const span = compteur.querySelector("span");
  span ? (span.innerHTML = i.toString()) : "";
};

compteur.addEventListener("click", increment);
