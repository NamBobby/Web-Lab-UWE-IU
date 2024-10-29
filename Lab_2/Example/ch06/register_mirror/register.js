"use strict";

// const getElement = function(selector) { return document.querySelector(selector); }
// const getElement = (selector) => { return document.querySelector(selector); }
const getElement = selector => document.querySelector(selector)

const processEntries = () => {
    const email = getElement("#email_address");
    const phone = getElement("#phone");
    const country = getElement("#country");
    const term = getElement("#term");

    const msgs = [];

    if (email.value === "") {
        msgs.push("Please enter an email address");
    }
    if (phone.value === "") {
        msgs.push("Please enter mobile phone number. ");
    } 
    if (country.value === "") {
        msgs.push("Please enter a country.")
    }
    if (!term.checked) {
        msgs.push("You must agree to the term of service.")
    }

    if (msgs.length === 0) {
        getElement("form").submit();
    } else {
        displayErrorMsgs(msgs);
    }
}

const displayErrorMsgs = (msgs) => {
    // create ul element
    const ul = document.createElement("ul");
    ul.classList.add("message");

    // create li element for each error message, add to ul
    for(let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul isn't exsit, add the ul into the document
    const node = getElement("ul");
    if (node == null) {
        // get the form element
        const form = getElement("form");

        // add the ul to parenet of form, befor the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // repalce existing ul node
        node.parentNode.replaceChild(ul, node);
    }
}

const resetForm = () => {
    getElement("#form").reset();

    // remove error messages if any
    const ul = getElement("ul");
    if (ul !== null) ul.remove();

    getElement("#email_address").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    getElement("#register").addEventListener("click", processEntries);
    getElement("#reset_form").addEventListener("click", resetForm);

    getElement("#email_address").focus();
});
