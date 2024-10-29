"use strict";

const miles = parseFloat(prompt("Miles", 120));

let kms = miles * 1.60934;

const result = "Miles: " + miles + "\nKilometers: " + kms
const rel = `Miles: ${miles}\nKilometers: ${kms}`;

alert(rel);
