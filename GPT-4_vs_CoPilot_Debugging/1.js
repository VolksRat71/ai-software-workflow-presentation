// user.js

export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

