declare class Fish {
}
declare class Cat {
}
type AnimalOption = {
    swim: any;
} | {
    jump: any;
};
type AnimalFromOption<T> = T extends {
    swim: any;
} ? Fish : Cat;
declare function generator<T extends AnimalOption>(options: T): AnimalFromOption<T>;
declare const a: Cat;
