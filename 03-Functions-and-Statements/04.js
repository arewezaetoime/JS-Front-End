import pass from test.js
import printFullName from test.js
import gradeFormatter from test.js


function printCertificate(grade, nameArr) {
    if (pass(grade)) {
        printHeader();
        printFullName(nameArr);
        gradeFormatter(grade);
    } else {
        let msg = `${nameArr[0]} ${nameArr[1]} does not qualify`;
        console.log(msg);
    } 
    return;
}

printCertificate(3, ['kona', 'konka'])