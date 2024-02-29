function sumDigits(num) {
 let textNum = num.toString();
 let sum = 0;
 
 for (let i = 0; i < textNum.length; i++) {
    sum += Number(textNum[i]);
    }

    console.log(sum);
}

// sumDigits(245678)