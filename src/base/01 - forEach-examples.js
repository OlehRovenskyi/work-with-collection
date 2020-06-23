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

// Example 1
menu.forEach((item, index) => {
    console.log(`Delicious name: ${ item.name }, index: ${ index }`);
})

// Example 2
let productIds = [];
menu.forEach((item, index) => {
    const id = item.id;
    const isAvailableModifiers = !!item.modifiers.length;

    if (isAvailableModifiers) productIds.push(id);
})

console.log(`product Ids with modifiers: ${ productIds }`);

// Example 3 Compare with for
for (let i = 0; i < menu.length; i++) {
    console.log(`Delicious name: ${ menu[i].name }, index: ${ i }`);
}

// Example 4 break
for (let i = 0; i < menu.length; i++) {
    if (menu[i].name === 'Salad') {
        console.log('I LOVE Salad');
        break;
    }

    console.log(`circle: ${ i }`);
}

/*
* Which Should You Use
*
* forEach
* 1. forEach keeps the variable’s scope to the block
* 2. Lower chance of accidental errors with forEach
* 3. forEach is easier to read
*
* for
* 1. You can break out of a for loop earlier
*
* *** Need To Remember ***
* forEach just loop over the array and executes the callback
*/
