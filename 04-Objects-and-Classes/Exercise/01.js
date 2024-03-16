function solve(array) {
    const employees = {};

    for (const name of array) {
        employees[name] = name.length;

    }

    for (const employee in employees) {
        console.log(employee, employees[employee]);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])