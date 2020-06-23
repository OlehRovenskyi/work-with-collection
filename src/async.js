const menu = [{
    name: 'Burger',
    id: 'qewffewfwef',
    ingredients: ['bread roll', 'meat', 'onion', 'sauce'],
    modifiers: [],
    section: 'main',
    is_available: true,
}, {
    name: 'Soup',
    id: 'qdfh4k58',
    ingredients: ['potato', 'chicken', 'onion', 'carrot'],
    modifiers: [],
    section: 'soup',
    is_available: true,
}, {
    name: 'Salad',
    id: 'fjk7frjt',
    ingredients: ['mozzarella', 'pepper', 'oil', 'onion'],
    modifiers: [],
    section: 'starters',
    is_available: false,
}, {
    name: 'Fresh Salad',
    id: 'fjk7fefeft',
    ingredients: ['tomatoes', 'cucumber', 'pepper', 'oil', 'onion'],
    modifiers: ['olive oil', 'sunflower oil'],
    section: 'starters',
    is_available: true,
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
let availablePositions = [];

async function composeMenuData(menu) {
    await storeAvailablePositions(menu)

    console.log(availablePositions);
}

async function getPrice(id) {
    return Promise.resolve(prices.find(item => item.entity_id === id));
}

async function storeAvailablePositions(menu) {
    const availableItems = menu.filter(item => item.is_available);

    // await Promise.all(availableItems.forEach(async (item) => { // Be Careful 'forEach' just loop over the array
                                                                  // For this case we need 'map'
    await Promise.all(availableItems.map(async (item) => {
        item.price = await getPrice(item.id);
        setAvailablePositions(item);
        return item;
    }))
}

function setAvailablePositions(item) {
    availablePositions.push(item)
}

composeMenuData(menu);

// When need to resolve promises we should use map.
