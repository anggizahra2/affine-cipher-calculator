// Function to calculate modular inverse of a number 'a' mod 'm'
function modInverse(a, m) {
    for (let i = 1; i < m; i++) {
        if ((a * i) % m === 1) {
            return i;
        }
    }
    return 1;
}

function encrypt() {
    const message = document.getElementById("message").value.toUpperCase();
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const result = [];

    for (let i = 0; i < message.length; i++) {
        const charCode = message.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            const encryptedCharCode = (a * (charCode - 65) + b) % 26 + 65;
            result.push(String.fromCharCode(encryptedCharCode));
        } else {
            result.push(message[i]);
        }
    }

    document.getElementById("result").value = result.join("");
}

function decrypt() {
    const message = document.getElementById("message").value.toUpperCase();
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const aInverse = modInverse(a, 26);
    const result = [];

    for (let i = 0; i < message.length; i++) {
        const charCode = message.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            const decryptedCharCode = (aInverse * (charCode - 65 - b + 26)) % 26 + 65;
            result.push(String.fromCharCode(decryptedCharCode));
        } else {
            result.push(message[i]);
        }
    }

    document.getElementById("result").value = result.join("");
}
