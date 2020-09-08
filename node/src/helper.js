const fs = require('fs');
const path = require('path');


const readFile = (fileName) => {
    const data = fs.readFileSync(path.resolve(__dirname, '..',  fileName));
    return data;
};

const getTable = (rows) => {
    let table = '<table class="table table-hover">';
    table += '<thead><tr><th>unit</th><th>temperature</th></tr></thead><tbody>';
    rows.map(row => {
        table += '<tr>';
        table += `<td>${row['unit_id']}</td>`
        table += `<td>${row['temperature']}</td>`
        table += '</tr>';
    });
    table += '</tbody></table>';
    return table;
};

module.exports = {readFile, getTable};
