interface Family {
  age: number;
  name: string;
  [key: string]: any;
}
const person: Family = {
  age: 21,
  name: "Anuj",
  bs: 22,
};

function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}
pow(2, 1);

const arr: number[] = [];

arr.push(1);

//tuple
type myList = [number, string, boolean];
const arr1: myList = [2, "abc", true];
arr1.push(22);
//to make it optionalwe use
type mySecondList = [number?, string?, boolean?];
const arr2: mySecondList = [22];
