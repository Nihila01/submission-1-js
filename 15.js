function updateEmployeeRecord(employee, updates) {
    return Object.assign({}, employee, updates);
}
const employee = { name: 'John', position: 'Developer', salary: 50000 };
const updates = { position: 'Senior Developer', salary: 60000 };
const updatedEmployeeRecord = updateEmployeeRecord(employee, updates);
console.log(updatedEmployeeRecord);

    