// Select DOM elements
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const passwordEl = document.getElementById('password');
const copyBtn = document.getElementById('copy');

// Define character sets
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-={}[];,.<>/?~';

// Function to generate random password
function generatePassword() {
    const length = lengthEl.value;
    const useUppercase = uppercaseEl.checked;
    const useLowercase = lowercaseEl.checked;
    const useNumbers = numbersEl.checked;
    const useSymbols = symbolsEl.checked;

    let chars = '';

    if (useUppercase) {
        chars += uppercaseChars;
    }

    if (useLowercase) {
        chars += lowercaseChars;
    }

    if (useNumbers) {
        chars += numberChars;
    }

    if (useSymbols) {
        chars += symbolChars;
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

// Function to copy password to clipboard
function copyPassword() {
    passwordEl.select();
    document.execCommand('copy');
}

// Add event listeners
generateBtn.addEventListener('click', () => {
    const password = generatePassword();
    passwordEl.value = password;
});

copyBtn.addEventListener('click', copyPassword);