function solve() {
    const inputNameEl = document.getElementById('name');
    const inputPhoneEl = document.getElementById('phone');
    const inputCategoryEl = document.getElementById('category');
    const btnAddEl = document.getElementById('add-btn');
    const listCheckEl = document.getElementById('check-list');
    const listContactEl = document.getElementById('contact-list');
  
    btnAddEl.addEventListener('click', function () {
      const contactName = inputNameEl.value.trim();
      const contactPhone = inputPhoneEl.value.trim();
      const contactCategory = inputCategoryEl.value;
  
      if (contactName === '' || contactPhone === '' || contactCategory === '') {
        return;
      }
  
      const listItemEl = document.createElement('li');
      const articleEl = document.createElement('article');
      const nameParagraphEl = document.createElement('p');
      nameParagraphEl.textContent = `name:${contactName}`;
      const phoneParagraphEl = document.createElement('p');
      phoneParagraphEl.textContent = `phone:${contactPhone}`;
      const categoryParagraphEl = document.createElement('p');
      categoryParagraphEl.textContent = `category:${contactCategory}`;
  
      articleEl.appendChild(nameParagraphEl);
      articleEl.appendChild(phoneParagraphEl);
      articleEl.appendChild(categoryParagraphEl);
  
      const buttonContainerEl = document.createElement('div');
      buttonContainerEl.className = 'buttons';
  
      const editButtonEl = document.createElement('button');
      editButtonEl.className = 'edit-btn';
      editButtonEl.textContent = 'Edit';
      editButtonEl.addEventListener('click', function () {
        inputNameEl.value = contactName;
        inputPhoneEl.value = contactPhone;
        inputCategoryEl.value = contactCategory;
        listCheckEl.removeChild(listItemEl);
      });
  
      const saveButtonEl = document.createElement('button');
      saveButtonEl.className = 'save-btn';
      saveButtonEl.textContent = 'Save';
      saveButtonEl.addEventListener('click', function () {
        listContactEl.appendChild(listItemEl);
        listItemEl.removeChild(buttonContainerEl);
        const deleteButtonEl = document.createElement('button');
        deleteButtonEl.className = 'del-btn';
        deleteButtonEl.textContent = 'Delete';
        deleteButtonEl.addEventListener('click', function () {
          listContactEl.removeChild(listItemEl);
        });
        listItemEl.appendChild(deleteButtonEl);
      });
  
      buttonContainerEl.appendChild(editButtonEl);
      buttonContainerEl.appendChild(saveButtonEl);
  
      listItemEl.appendChild(articleEl);
      listItemEl.appendChild(buttonContainerEl);
  
      listCheckEl.appendChild(listItemEl);
  
      inputNameEl.value = '';
      inputPhoneEl.value = '';
      inputCategoryEl.selectedIndex = 0;
    });
  }
  
  