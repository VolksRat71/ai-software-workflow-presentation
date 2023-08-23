// main.js
import { createUser, displayUserInfo } from './utils';

const userData = {
    name: "John Doe",
    age: 30
};

try {
    const user = createUser(userData);
    console.log(displayUserInfo(user));
} catch (error) {
    console.error("An error occurred:", error.message);
}

