function solve(fruit, grams, priceKg) {
    const kilograms = grams / 1000
    const price = kilograms * priceKg

    console.log(`I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

// solve('orange', 2500, 1.80)