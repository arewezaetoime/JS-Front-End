function search() {
   const searchListElement = document.getElementById('towns')
   // console.log(searchListElement.innerHTML)
   const resultElement = document.getElementById('result')
   const searchElement = document.getElementById('searchText').value

   let matchesCount = 0;
   const townsElements = Array.from(searchListElement.children);

   for (let town of townsElements) {
      if (town.textContent.toLowerCase().includes(searchElement.toLowerCase())) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matchesCount ++;
      };
   }

   resultElement.textContent = `${matchesCount} matches found`;

}
