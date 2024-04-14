window.addEventListener("load", solve);

function solve() {

    const currentNameInputElement = document.getElementById('name');
    const currentPhoneInputElement = document.getElementById('phone');
    const selectTheCategoiryElement = document.getElementById('category');
    const addButtonElement = document.getElementById('add-btn');
    const checkListElement = document.getElementById('check-list');
    const contactListElememnt = document.getElementById('contact-list');

    addButtonElement.addEventListener('click', () => {
        const eName = currentNameInputElement.value.trim();
        const ePhone = currentPhoneInputElement.value.trim();
        const eCategory = selectTheCategoiryElement.value;

        if (!eName || !ePhone || !eCategory) {
            return;
        }

        const newLiElement = document.createElement('li');
        newLiElement.textContent = `${eName}, ${ePhone}, ${eCategory}`;

        const newEditButton = document.createElement('button');
        newEditButton.textContent = 'Edit';
        newEditButton.addEventListener('click', () => {
            currentNameInputElement.value = eName;
            currentPhoneInputElement.value = ePhone;
            selectTheCategoiryElement.value = eCategory;
            checkListElement.removeChild(newLiElement);
        });

        const newSaveButton = document.createElement('button');
        newSaveButton.textContent = 'Save';
        newSaveButton.addEventListener('click', () => {
            contactListElememnt.appendChild(newLiElement);
            newLiElement.removeChild(newEditButton);
            newLiElement.removeChild(newSaveButton);

            const newDeleteButton = document.createElement('button');
            newDeleteButton.textContent = 'Delete';
            newDeleteButton.addEventListener('click', () => {
                contactListElememnt.removeChild(newLiElement);
            });
            newLiElement.appendChild(newDeleteButton);
        });

        newLiElement.appendChild(newEditButton);
        newLiElement.appendChild(newSaveButton);
        checkListElement.appendChild(newLiElement);

        //TODO: Clear the input fields. It;s very importamt
        currentNameInputElement.value = '';
        currentPhoneInputElement.value = '';
        selectTheCategoiryElement.value = '';
    });
}
