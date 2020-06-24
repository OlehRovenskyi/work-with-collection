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

const onlyStarters = menu.filter((item) => item.section === 'starters');
console.log(onlyStarters);

/*
* Summary
*
* The main difference between 'forEach' and 'filter' is that 'filter' always returns an array,
* even if there is only one matching element.
*/

/*
* *** Be Careful ***
* copying of objects is carried out by reference
*/

onlyStarters[0].name = 'new name for burger'
console.log(menu[2].name)
