function catalogue(input) {
    // Create an object to store items grouped by their first letter
    let catalog = {};
    // Process each input item and sort 
    for (let item of input.sort()) {
        let [name, price] = item.split(' : ');
        let firstLetter = name[0]
        // Create an array for the first letter if it doesn't exist
        if (!catalog[firstLetter]) {
            catalog[firstLetter] = [];
        }
        // Add the item to the array
        catalog[firstLetter].push({name, price});
    }
    
    for (let key of Object.keys(catalog)) {
        console.log(key);
    
        for (let product of catalog[key].sort((a, b) => a.name.localeCompare(b.name))) {
            console.log(`  ${product.name}: ${product.price}`)
        }
    }
}

catalogue ([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])

catalogue ([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ])