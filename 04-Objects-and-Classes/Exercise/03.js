function showInventory(currentStockArr, deliveryOrderArr) {
    const store = {};

    for (let i = 0; i < currentStockArr.length; i += 2) {
        const product = currentStockArr[i];
        const quantity = Number(currentStockArr[i + 1]);

        store[product] = quantity;
    }

    for (let i = 0; i < deliveryOrderArr.length; i += 2) {
        const product = deliveryOrderArr[i];
        const quantity = Number(currentStockArr[i+1]);

        if (!store[product]) {
            store[product] = 0;
        }

        store[product] += quantity;
    }

    for (const product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}


showInventory([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);