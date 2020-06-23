import * as _ from 'lodash';
import * as fp from 'lodash/fp';

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

// Example 1.
let productIds = [];
_.each(menu, (item, index) => {
    const id = item.id;
    const isAvailableModifiers = !!item.modifiers.length;

    if (isAvailableModifiers) productIds.push(id);
})
console.log(productIds);

// Example
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

// Lodash
const propertiesFromChanges2 = _.flow(
    (item) => _.filter(item, (product) => product.changes),
    (item) => _.map(item, (product) => product.changes),
    (item) => _.reduce(item,(properties, changes) =>
        properties.concat(
            ...changes.map(change => Object.keys(change))
        ), []),
)(menu);
console.log(propertiesFromChanges2);

// Lodash fp
const propertiesFromChanges3 = fp.flow(
    fp.filter((product) => product.changes),
    fp.map((product) => product.changes),
    fp.reduce((properties, changes) =>
        properties.concat(
            ...changes.map(change => Object.keys(change))
        ), []),
)(menu);
console.log(propertiesFromChanges3);
