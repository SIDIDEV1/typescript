class Fish {
  shout() {
    return false;
  }
}

class Cat {
  shout() {
    return "miaou";
  }
}

type AnimalShout<T> = T extends { shout: () => infer U } ? U : never;

type A = AnimalShout<Fish>;
type B = AnimalShout<Cat>;
