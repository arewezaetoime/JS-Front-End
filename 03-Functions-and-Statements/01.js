// ▪ Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and description
// ▪ Grade < 3.00 → Fail
// ▪ Grade >= 3.00 and < 3.50 → Poor
// ▪ Grade >= 3.50 and < 4.50 → Good
// ▪ Grade >= 4.50 and < 5.50 → Very good
// ▪ Grade >= 5.50 → Excellent

function gradeFormatter(grade) {

    if (grade < 3.00) {
        return `Fail (${Math.floor(grade)})`
    }
    if (grade >= 3.00 && grade < 3.50) {
        return `Poor (${grade.toFixed(2)})`
    }
    if (grade >= 3.50 && grade < 4.50) {
        return `Good (${grade.toFixed(2)})`
    }
    if (grade >= 4.50 && grade < 5.50) {
        return `Very good (${grade.toFixed(2)})`
    }
    if (grade >= 5.50) {
        return `Excellent (${grade.toFixed(2)})`
    }
}

console.log(gradeFormatter(2.99));