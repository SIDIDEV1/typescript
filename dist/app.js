"use strict";
class Fish {
}
class Cat {
}
function generator(options) {
    if ("swim" in options) {
        return new Fish();
    }
    else {
        return new Cat();
    }
}
const a = generator({ jump: "sauter" });
