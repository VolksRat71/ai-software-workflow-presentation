function capitalizeSortAndJoin(inputArray) {
    if (!Array.isArray(inputArray)) {
        throw new Error("Input must be an array!");
    }

    const capitalizedArray = inputArray
        .filter(word => typeof word === "string")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1));

    const sortedArray = capitalizedArray.sort((a, b) => a.length - b.length);

    return sortedArray.join(", ");
}

module.exports = capitalizeSortAndJoin;
