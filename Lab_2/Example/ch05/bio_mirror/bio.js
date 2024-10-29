"use strict";

function getAsArray(promptMsg, separator= " ") {
    return prompt(promptMsg).split(separator);
}

function capitalize(...words) {
    const capitalizedWords = [];
    for(let word of words) {
        const firstLetter = word.substring(0,1).toUpperCase();
        const restOfWord = word.substring(1).toLowerCase();
        capitalizedWords.push(firstLetter + restOfWord)
    }
    return capitalizedWords;
}

function trim(...items) {
    const trimmedItems = [];
    for(let item of items) {
        trimmedItems.push(item.trim());
    }
    return trimmedItems;
}

function getColorsString(...items) {
    const firstItems = items.slice(0,-1);
    const lastItem = items.at(-1);
    return `${firstItems.join(", ")} and ${lastItem}`;
}

function displayBio(name, dob, colors) {
    alert(`
    Hello, my name is ${name.join(" ")}
    I was born in ${dob.at(-1)}.
    I have ${ colors.lenght } favorites colors: ${getColorsString(...colors)}.
    `);
}

const names = capitalize(...getAsArray("Enter your full name"));
const dob = getAsArray("Enter you DOB in mm-ddm-yyyy", ",");

const msg = "Enter your favarite colors, separated by commas";
const colors = trim(...getAsArray(msg, ","));

displayBio(names, dob, colors);
