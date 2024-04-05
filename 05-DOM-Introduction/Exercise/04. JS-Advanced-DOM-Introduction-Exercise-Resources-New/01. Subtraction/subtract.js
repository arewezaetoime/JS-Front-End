function subtract() {
    const firstElement = document.getElementById('firstNumber');
    const secondElement = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');

    resultElement.textContent = Number(firstElement.value) - Number(secondElement.value)

    // console.log(resultElement)

    // console.log(firstElement);
    // console.log(secondElement);
    // console.log(resultElement);
}