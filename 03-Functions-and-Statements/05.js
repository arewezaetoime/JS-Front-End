function solve(product, quantity) {
    
    function getProductPrice(product) {
        switch (product) {
            case 'coffee': return 1.5;
            case 'water': return 1.0;
            case 'coke': return 1.4;
            case 'snacks': return 2;
        }
    }
    const productPrice = getProductPrice(product);
    const totalPrice = productPrice * quantity

    console.log(totalPrice.toFixed(2));
}