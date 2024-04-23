"use strict";
const a = ["tomate", 2];
const b = ["viande", 2];
function merge(a, b) {
    return [...a, ...b];
}
const c = merge(a, b);
