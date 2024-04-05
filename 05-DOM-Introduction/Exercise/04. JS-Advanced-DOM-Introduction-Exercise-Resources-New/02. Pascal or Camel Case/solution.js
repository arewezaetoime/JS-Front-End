function solve() {
  const textElement = document.getElementById('text');
  const namingConventionElement = document.getElementById('naming-convention');
  const resultElement = document.querySelector('#result');

  console.log(textElement);
  console.log(namingConventionElement);
  console.log(resultElement);

  const text = textElement.value;
  const namingConvention = namingConventionElement.value;

  console.log(text);
  console.log(namingConvention);

  const convertToPascalCase = (text) => {
    text.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');
  };

  const convertor = {
    'Pascal Case': convertToPascalCase,
    'Camel Case': text.convertToPascalCase[0].toLowerCase() + text.convertToPascalCase.slice(1)
  }

  if (!convertor[namingConvention]) {
    resultElement.textContent = 'Error!';
    return;
  }

  resultElement.textContent = convertor[namingConvention](text);
}