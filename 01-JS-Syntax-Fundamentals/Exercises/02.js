// `Total price: {price}`

//           Friday	Saturday	Sunday
// Students	 8.45	9.80	    10.46
// Business	 10.90	15.60	    16
// Regular	 15	    20	        22.50


// There are also discounts based on some conditions:
// Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
// Note: You should reduce the prices in that EXACT order.

function calculateExpenses(numberOfPeople, typeOfGroup, day) {

     const dayPricesDict = {
        "Friday": {
            "Students": 8.45,
            'Business': 10.90,
            'Regular': 15,
            },
        "Saturday": {
            "Students": 9.80,
            'Business': 15.60,
            'Regular': 20,
            },
        'Sunday': {
            "Students": 10.46,
            'Business': 16,
            'Regular': 22.50,
            },
        
     };

    let totalPrice;

    if (typeOfGroup === 'Students') {
        totalPrice = dayPricesDict[day][typeOfGroup] * numberOfPeople;

        if (numberOfPeople >= 30) {
            totalPrice = totalPrice * 0.85
        }

    } else if (typeOfGroup === 'Business') {
        totalPrice = dayPricesDict[day][typeOfGroup] * numberOfPeople;

        if (numberOfPeople >= 100) {
            totalPrice -= 10 * dayPricesDict[day][typeOfGroup]
        }

    } else if (typeOfGroup === 'Regular') {
        totalPrice = dayPricesDict[day][typeOfGroup] * numberOfPeople;

        if (numberOfPeople >= 10 && numberOfPeople <= 20) {
            totalPrice = totalPrice * 0.95
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}





