console.log('Hello world !!!');

const arrow_es6 = name => {
    console.log('Hello ' + name);
};

arrow_es6('Ali');

class Student {
    constructor(name, school) {
        this.name = name;
        this.school = school;
    }

    userInfo() {
        console.log(`Your name is ${this.name} and you study at ${this.school}`);
    }
}

const std = new Student('Kan', 'HKR');
std.userInfo();


class Measurement {
    constructor(jsonData) {
        this.rows = jsonData;
    }

    htmlTable() {
        let table = '<table class="table table-hover">';
        table += '<thead><tr><th>unit</th><th>temperature</th></tr></thead><tbody>';
        this.rows.map(row => {
            table += '<tr>';
            table += `<td>${row['unit_id']}</td>`
            table += `<td>${row['temperature']}</td>`
            table += '</tr>';
        });
        table += '</tbody></table>';
        return table;
    }
}


(function () {
    const root = document.querySelector('#root');
    root.innerHTML = 'HIII';

    fetch('http://localhost:7000/')
        .then(response => response.json())
        .then(data => {
            const m = new Measurement(data);
            root.innerHTML = m.htmlTable();
        });
})();
