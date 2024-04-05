function toggle() {
    const extraElement = document.getElementById('extra');
    const buttonElement = document.querySelector('.head span.button');

    console.log(buttonElement);

    const currentButtonText = buttonElement.textContent

    if (currentButtonText === 'More') {
        extraElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    }
    else {
        buttonElement.textContent = 'More';
        extraElement.style.display = 'none';
    }
}