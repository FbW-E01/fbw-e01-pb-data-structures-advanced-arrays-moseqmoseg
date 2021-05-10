1 ////

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

let total = orders.reduce(
    (accumulator, order) => {
        return accumulator + order.amount;

    }, 0
);

console.log(total);

2 ////
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const result = arrayOfNumbers.map(x => x + 1);

console.log(result);

3 ////

const filterEvens = (array) => array.filter(x => (x % 2) === 0);

console.log(filterEvens([1, 2, 3, 11, 12, 13]));
console.log(filterEvens([22, 2, 31, 110, 6, 13]));

4 ////
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (array, search) => array.filter(x => x.includes(search));


console.log(filterItems(friends, 'ka'));
console.log(filterItems(friends, 'e'));

5 ////

const sum = (array) => array.reduce((accu, element) => accu + element, 0)

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));

6 ////

const squareRootof = (array) => array.map(x => Math.sqrt(x));

console.log(squareRootof(arrayOfNumbers));