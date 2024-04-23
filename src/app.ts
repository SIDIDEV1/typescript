type ListItem = [string, number];

const a: ListItem = ["tomate", 2];
const b: ListItem = ["viande", 2];

function merge<T extends unknown[], U extends unknown[]>(
  a: T,
  b: U
): [...T, ...U] {
  return [...a, ...b];
}

const c = merge(a, b);
