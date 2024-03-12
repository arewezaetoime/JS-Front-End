function printFullName(arr) {
    return arr[0] + ' ' + arr[1];
}

// console.log(readFullName('sso', 'nka'));

const fullName = printFullName(['sso', 'nka']);

// console.log(fullName);

function isValid(index, arr) {
    if (Number.isInteger(index) && index >= 0 && index < arr.length) {
        return true;
      } else {
    return false; }
    }


function pass(grade) {
  return grade >= 3;
}

// console.log(pass(2));

function swapElements(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        swap(arr, i, arr.length - 1 - i);
    }
    console.log(arr.join(' '));
    function swap(elements, i, j) {
        let temp = elements[i]; elements[i] = elements[j]; elements[j] = temp;
    }
}


function printHeader() {
    console.log('~~~- {@} -~~~')
    return;
}

