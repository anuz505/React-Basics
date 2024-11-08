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

//Generics
class Observator<T> {
  constructor(public value: T) {}
}
let x: Observator<number>;
let y: Observator<string>;
let a: Observator<Family>;

interface BusinnesOwner {
  name: string;
  email: string;
  creditScore: number;
}
interface UserIdentity {
  id: number;
  age: number;
  address: string;
}
type Employee = BusinnesOwner & UserIdentity;

function signContract(employee: Employee) {
  console.log(
    `The contract has been signed with ${employee.name} with a credit score of ${employee.creditScore} and the address is ${employee.address}`
  );
}
signContract({
  name: "Anuj",
  email: "anujb346",
  creditScore: 202,
  id: 1,
  age: 22,
  address: "Kathmandu",
});
