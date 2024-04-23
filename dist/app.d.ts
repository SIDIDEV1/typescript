declare class Fish {
    shout(): boolean;
}
declare class Cat {
    shout(): string;
}
type AnimalShout<T> = T extends {
    shout: () => infer U;
} ? U : never;
type A = AnimalShout<Fish>;
type B = AnimalShout<Cat>;
