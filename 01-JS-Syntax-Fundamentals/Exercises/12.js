function performOperations(startingNumber, op1, op2, op3, op4, op5) {
    let result = parseInt(startingNumber);
    let operations = [op1, op2, op3, op4, op5];

    for (let operation of operations) {
        switch (operation) {
            case 'chop':
                result /= 2;
                break;
            case 'dice':
                result = Math.sqrt(result);
                break;
            case 'spice':
                result += 1;
                break;
            case 'bake':
                result *= 3;
                break;
            case 'fillet':
                result *= 0.8; // Subtracting 20% is equivalent to multiplying by 0.8
                break;
            default:
                console.log("Invalid operation:", operation);
                return; // Exit the function if an invalid operation is encountered
        }
        console.log(result);
    }
}

// performOperations('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
