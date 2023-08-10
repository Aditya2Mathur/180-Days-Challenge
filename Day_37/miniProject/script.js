const displayPassword = document.querySelector("[displayPassword]");
const copyBtn = document.querySelector("[copyBtn]");
const dataCopyMsg = document.querySelector("[data-copyMsg]");
const dataLengthNumber = document.querySelector("[data-lengthNumber]");
const inputSlider = document.querySelector("[data-lengthSlider]");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateBtn");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

let password = " ";
let passwordLength = 2;
let checkCount = 1;

handleSlider();

function handleSlider() {
    inputSlider.value = passwordLength;
    dataLengthNumber.innerText = passwordLength;
}

function setIndicator(color) {
    indicator.style.backgroundcolor = color;
    indicator.style.boxShadow = "10px 20px 30px blue";
}

function genRandomInteger(min, max) {
    Math.floor(Math.random() * (max - min)) + min;
}

function generateInteger() {
    return genRandomInteger(0, 9);
}

function generateUpparcase() {
    return String.fromCharCode(genRandomInteger(65, 9));
}

function generateLowercase() {
    return String.fromCharCode(genRandomInteger(97, 122));
}

function generateSymbol() {
    return String.fromCharCode(genRandomInteger(33, 47));
}


function calcStrength() {
    let hasUppar = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUppar = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numberCheck.checked) hasNum = true;
    if (symbolCheck.checked) hasSym = true;

    if(hasLower && hasUppar && (hasNum || hasSym) && passwordLength >= 8){
        setIndicator()
    }
    else if(
        (hasLower || hasUppar )
    )
}
