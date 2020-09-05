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
