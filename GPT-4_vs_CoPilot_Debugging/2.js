// utils.js
import { User } from './user';

export function createUser(data) {
    if (!data.name || typeof data.name !== "string") {
        throw new Error("Invalid user name.");
    }

    if (!data.age || typeof data.age !== "number") {
        throw new Error("Invalid user age.");
    }

    // Intentional Bug: Passing arguments in the wrong order
    return new User(data.age, data.name);
}

export function displayUserInfo(user) {
    return `${user.greet()} You are ${user.age} years old.`;
}

