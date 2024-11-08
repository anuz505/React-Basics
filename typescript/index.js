var person = {
    age: 21,
    name: "Anuj",
    bs: 22,
};
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(2, 1);
var arr = [];
arr.push(1);
var arr1 = [2, "abc", true];
arr1.push(22);
var arr2 = [22];
//Generics
var Observator = /** @class */ (function () {
    function Observator(value) {
        this.value = value;
    }
    return Observator;
}());
var x;
var y;
var a;
function signContract(employee) {
    console.log("The contract has been signed with ".concat(employee.name, " with a credit score of ").concat(employee.creditScore, " and the address is ").concat(employee.address));
}
signContract({
    name: "Anuj",
    email: "anujb346",
    creditScore: 202,
    id: 1,
    age: 22,
    address: "Kathmandu",
});
//Another generic example
var StorageContainer = /** @class */ (function () {
    function StorageContainer() {
        this.contents = [];
    }
    StorageContainer.prototype.addItem = function (item) {
        this.contents.push(item);
    };
    StorageContainer.prototype.getItem = function (index) {
        return this.contents[index];
    };
    return StorageContainer;
}());
var userNameStorage = new StorageContainer();
userNameStorage.addItem("Anuj Bhandari");
userNameStorage.addItem("asdadf");
console.log(userNameStorage.getItem(0));
