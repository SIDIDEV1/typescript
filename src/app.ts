class Fish {}

class Cat {}

type AnimalOption = { swim: any } | { jump: any };
type AnimalFromOption<T> = T extends { swim: any } ? Fish : Cat;

function generator<T extends AnimalOption>(options: T): AnimalFromOption<T> {
  if ("swim" in options) {
    return new Fish();
  } else {
    return new Cat();
  }
}

const a = generator({ jump: "sauter" });
