// Leap Year Checker (if-else)
function checkLeapYear() {
    const year = document.getElementById('yearInput').value;
    const result = isLeapYear(year);
    document.getElementById('leapYearResult').textContent = result;
}

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Ticket Pricing (if-else)
function checkTicketPrice() {
    const age = document.getElementById('ageInput').value;
    const result = ticketPrice(age);
    document.getElementById('ticketPriceResult').textContent = result;
}

function ticketPrice(age) {
    if (age <= 12) {
        return "Ticket price: $10 (Child)";
    } else if (age >= 13 && age <= 17) {
        return "Ticket price: $15 (Teenager)";
    } else if (age >= 18) {
        return "Ticket price: $20 (Adult)";
    } else {
        return "Invalid age.";
    }
}

// Clothing Advice (if-else)
function giveClothingAdvice() {
    const temp = document.getElementById('tempInput').value;
    const isRaining = document.getElementById('rainInput').checked;
    const result = clothingAdvice(temp, isRaining);
    document.getElementById('clothingAdviceResult').textContent = result;
}

function clothingAdvice(temp, isRaining) {
    if (temp < 15 && isRaining) {
        return "Wear a raincoat and bring an umbrella.";
    } else if (temp < 15) {
        return "Wear a warm jacket.";
    } else if (isRaining) {
        return "Bring an umbrella.";
    } else {
        return "You can wear light clothing.";
    }
}

// Fibonacci Sequence (Recursion)
function getFibonacci() {
    const n = document.getElementById('fibonacciInput').value;
    const result = fibonacci(n);
    document.getElementById('fibonacciResult').textContent = `Fibonacci number at position ${n}: ${result}`;
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Palindrome Checker (Recursion)
function checkPalindromeString() {
    const str = document.getElementById('palindromeInput').value;
    const result = isPalindrome(str);
    document.getElementById('palindromeResult').textContent = result ? `"${str}" is a palindrome.` : `"${str}" is not a palindrome.`;
}

function isPalindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    function checkPalindrome(left, right) {
        if (left >= right) {
            return true;
        }
        if (str[left] !== str[right]) {
            return false;
        }
        return checkPalindrome(left + 1, right - 1);
    }

    return checkPalindrome(0, str.length - 1);
}

// Power Function (Recursion)
function calculatePower() {
    const base = document.getElementById('baseInput').value;
    const exponent = document.getElementById('exponentInput').value;
    const result = power(base, exponent);
    document.getElementById('powerResult').textContent = `${base} raised to the power of ${exponent} is ${result}`;
}

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
