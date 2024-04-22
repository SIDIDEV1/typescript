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
const user = {
    name: "ok",
    age: 10,
};
function identity(arg) {
    return arg;
}
const aa = identity(3);
function tablee(arg) {
    return arg[0];
}
const aaa = tablee(["hellow", 1, false]);
function namefn(arg) {
    console.log(arg.length);
    return arg;
}
const aasa = namefn([3, ""]);
