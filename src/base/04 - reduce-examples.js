const menu = [{
    name: 'Burger',
    id: 'qewffewfwef',
    description: 'the best burger!',
    ingredients: ['bread roll', 'meat', 'onion', 'sauce'],
    modifiers: [],
    section: 'main',
    changes: [{date: new Date(), prevName: 'King Burger'}],
}, {
    name: 'Soup',
    description: 'Classic soup',
    id: 'qdfh4k58',
    ingredients: ['potato', 'chicken', 'onion', 'carrot'],
    modifiers: [],
    section: 'soup',
    changes: [],
}, {
    name: 'Salad',
    id: 'fjk7frjt',
    ingredients: ['mozzarella', 'pepper', 'oil', 'onion'],
    modifiers: [],
    section: 'starters',
    changes: [{date: new Date(), prevName: 'Summer Salad'}],
}, {
    name: 'Fresh Salad',
    description: 'From best traditions',
    id: 'fjk7fefeft',
    ingredients: ['tomatoes', 'cucumber', 'pepper', 'oil', 'onion'],
    modifiers: ['olive oil', 'sunflower oil'],
    section: 'starters',
    changes: [],
}];
const prices = [{
    id: 'efwefwe3',
    entity_id: 'qewffewfwef',
    price: 100,
}, {
    id: 'efwefwe3',
    entity_id: 'qdfh4k58',
    price: 120,
}, {
    id: 'efwefwe3',
    entity_id: 'fjk7frjt',
    price: 130,
}, {
    id: 'efwefwe3',
    entity_id: 'fjk7fefeft',
    price: 140,
}];

/* Syntax:
*           array.reduce(function, initialValue);
*/

// Example 1
const collection = [1, 2, 3];
const sum = collection.reduce((acc, elem) => acc + elem, 0);
console.log(sum);

// Example 2
const nameLength = menu.reduce((acc, item) => acc + item.name.length, 0);
console.log(nameLength);

// Example 3 forEach
let nameLength2 = 0;
menu.forEach((item) => nameLength2 += item.name.length);
console.log(nameLength2);

// Example 4
const getMaxPrice = (data) => {
    return data.reduce((acc, item) => Math.max(acc, item.price), data[0].price);
};
console.log(getMaxPrice(prices));

// Example 5 array get list of properties from changes
const propertiesFromChanges = menu
    .filter((product) => product.changes)
    .map((product) => product.changes)
    .reduce(
        (properties, changes) =>
            properties.concat(
                ...changes.map(change => Object.keys(change))
            ), []
    );

console.log(propertiesFromChanges);

// Example 6 get object the next structure { [name]: [description] }
const description = menu.reduce((descriptionsTemplate, product) => {
    descriptionsTemplate[product.name] = product.description || '';
    return descriptionsTemplate;
}, {});
console.log(description);

/*
* As you can see, using .reduce() is an easy way to generate a single value or object from an array.
* */
