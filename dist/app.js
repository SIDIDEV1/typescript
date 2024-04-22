"use strict";
const compteur = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur.querySelector("span");
    span ? (span.innerHTML = i.toString()) : "";
};
compteur.addEventListener("click", increment);
