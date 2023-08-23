// The function intends to take an array of strings,
// capitalize the first letter of each string,
// then sort them,
// and finally return the resulting array concatenated into a single string
// with each capitalized word separated by a comma and a space.

function complexOperation(inputArray) {
    if (typeof inputArray !== "object" || !Array.isArray(inputArray)) {
        throw new Error("Input must be an array!");
    }

    // Use a for loop to capitalize the first letter
    let capitalizedArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        let word = inputArray[i];
        if (typeof word !== "string") {
            throw new Error("Array elements must be strings!");
        }

        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedArray.push(capitalizedWord);
    }

    // Use a non-standard sorting mechanism
    let sortedArray = capitalizedArray.sort((a, b) => {
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;
        return 0;
    });

    // Concatenate into a single string
    let result = "";
    for (let i = 0; i < sortedArray.length; i++) {
        result += sortedArray[i];
        if (i !== sortedArray.length - 1) {
            result += ", ";
        }
    }

    return result;
}

module.exports = complexOperation;
// The function intends to take an array of strings,
// capitalize the first letter of each string,
// then sort them,
// and finally return the resulting array concatenated into a single string
// with each capitalized word separated by a comma and a space.

function buggyComplexOperation(inputArray) {
    if (typeof inputArray !== "object" || !Array.isArray(inputArray)) {
        throw new Error("Input must be an array!");
    }

    // Use a for loop to capitalize the first letter
    let capitalizedArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        let word = inputArray[i];

        // BUG: Non-string values will be pushed into the array without any processing
        if (typeof word !== "string") {
            capitalizedArray.push(word);
            continue;
        }

        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedArray.push(capitalizedWord);
    }

    // Use a non-standard sorting mechanism
    let sortedArray = capitalizedArray.sort((a, b) => {
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;
        return 0;
    });

    // Concatenate into a single string
    let result = "";
    for (let i = 0; i < sortedArray.length; i++) {
        result += sortedArray[i];
        if (i !== sortedArray.length - 1) {
            result += ", ";
        }
    }

    return result;
}

module.exports = buggyComplexOperation;
