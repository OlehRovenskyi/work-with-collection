const menu = [{
    name: 'Burger',
    id: 'qewffewfwef',
    ingredients: ['bread roll', 'meat', 'onion', 'sauce'],
    modifiers: [],
    section: 'main',
}, {
    name: 'Soup',
    id: 'qdfh4k58',
    ingredients: ['potato', 'chicken', 'onion', 'carrot'],
    modifiers: [],
    section: 'soup',
}, {
    name: 'Salad',
    id: 'fjk7frjt',
    ingredients: ['mozzarella', 'pepper', 'oil', 'onion'],
    modifiers: [],
    section: 'starters',
}, {
    name: 'Fresh Salad',
    id: 'fjk7fefeft',
    ingredients: ['tomatoes', 'cucumber', 'pepper', 'oil', 'onion'],
    modifiers: ['olive oil', 'sunflower oil'],
    section: 'starters',
}];

// Example 1. We need get array of product names
const listOfProducts = menu.map((product) => product.name);
console.log(listOfProducts);

// Example 2. Compare with forEach
let listOfProducts2 = [];
menu.forEach((product) => {
    listOfProducts2.push(product.name);
});
console.log(listOfProducts2);

// Example 3. Need to add additional property
const availableProductIds = ['qewffewfwef', 'qdfh4k58', 'fjk7fefeft'];
const updatedMenu = menu.map(product => ({
    ...product,
    is_enabled: availableProductIds.includes(product.id),
}));
console.log(updatedMenu);

/*
* Like filter, map also returns an array.
*/

/*
* *** Be Careful ***
* copying of objects is carried out by reference
*/

const products = menu.map((product) => {
    product.is_new = true;

    return product
});
products[0].name = 'new name';
console.log('parent item: ', menu.find(item => item.id === products[0].id))
console.log('products[0]: ', products[0])

/* For resolve this problem need to provide one of the copying mechanisms */

const products2 = menu.map((product) => ({ ...product, is_new: true}));
products2[0].name = 'test name';
console.log('fixed parent item: ', menu.find(item => item.id === products2[0].id))
console.log('fixed products[0]: ', products2[0])

/*
* Summary
*
* Map like filter & forEach takes a callback and runs for each value in the array
* and returns each new value in the resulting array.
*/
