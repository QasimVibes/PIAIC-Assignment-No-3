"use strict";
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
let num = [2, 5, 9, 44, 72, 75];
const insertValueAtIndex = (array, index, value) => {
    array.splice(index, 0, value);
    return array;
};
let modifiedResult = insertValueAtIndex(num, 4, 65);
console.log(modifiedResult);
// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
let cart = ["Pasta", "Rice", "Soups", "Cheese", "Egg"];
const addItem = (cart, index, deleteRow, value) => {
    cart.splice(index, deleteRow, value); // Add item
    console.log(cart);
};
const removeItem = (cart, index, deleteRow) => {
    cart.splice(index, deleteRow); // Remove item
    console.log(cart);
};
const updateItem = (cart, index, deleteRow, value) => {
    cart.splice(index, deleteRow, value); // Update item
    console.log(cart);
};
addItem(cart, 2, 0, "Seafood");
removeItem(cart, 4, 1);
updateItem(cart, 5, 0, "Updated Item");
// Write a program that uses a while loop to print the first 25 integers.
let integers = 1;
while (integers <= 25) {
    console.log(integers);
    integers++;
}
// Write a program that uses a while loop to print the first 10 even numbers
let evenNum = 1;
while (evenNum <= 10) {
    if (evenNum % 2 == 0) {
        console.log(evenNum);
    }
    evenNum++;
}
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number
let factNum = 10;
const factorial = (factNum) => {
    if (factNum > 0) {
        let result = 1;
        let index = 1;
        while (index <= factNum) {
            result *= index;
            index++;
        }
        return result;
    }
    else {
        throw new Error("Please enter a positive number");
    }
};
let factResult = factorial(factNum);
console.log(factResult);
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let negArray = [1, 4, 7, 9, 0, 4, 7, -3, 7, -8];
const negativeCheck = (value) => {
    return value.filter((values) => {
        return values >= 0;
    });
};
let returnArray = negativeCheck(negArray);
console.log(returnArray);
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
let sumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumAll = (sum) => {
    let allSum = 0;
    let i = 0;
    while (i < sum.length) {
        allSum += sum[i];
        i++;
    }
    return allSum;
};
console.log(sumAll(sumArray));
// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
let celsiusTemperatures = [20, 54, 10, 7, 39];
const convertToCelsius = (celsiusTemps) => {
    const fahrenheitTemps = [];
    let i = 0;
    while (i < celsiusTemps.length) {
        const celsius = celsiusTemps[i];
        const fahrenheit = (celsius * 9) / 5 + 32;
        fahrenheitTemps.push(fahrenheit);
        i++;
    }
    return fahrenheitTemps;
};
let temperatureResult = convertToCelsius(celsiusTemperatures);
console.log(temperatureResult);
