import * as _ from 'lodash';

// Example 1.
const values = Array(10 ** 7)
    .fill(1)
    .map(() => _.random(1, 10 ** 5));

console.time('uniq');
_.times(4, () => [
    _.uniq(values),
]);
console.timeEnd('uniq');

const res = _.times(4, () => [
    _.uniq(values),
]);

console.log(res)

// Example 2.
console.time('forEach');
const obj = {};
values.forEach((item) => {
    obj[`item_${item}`] = item;
})
console.timeEnd('forEach');

console.time('forEach with Object.assign');
const obj = {};
values.forEach((item) => {
    Object.assign(obj, {[`item_${item}`]: item});
})
console.timeEnd('forEach with Object.assign');

console.time('forEach with spread');
const obj = {};
values.forEach((item) => ({...obj, [`item_${item}`]: item}))
console.timeEnd('forEach with spread');

console.time('reduce');
values.reduce((acc, number) => {
    acc[`item_${number}`] = number;
    return acc;
}, {});
console.timeEnd('reduce');
