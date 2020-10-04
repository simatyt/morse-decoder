const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {
    const result = [];
    for (let i = 0; i < expr.length; i += 10) {
        const symbol = expr.slice(i, i + 10);
        result.push(decodeToChar(decodeToMorse(symbol)));
    }

    return result.join("");
}

function decodeToMorse(code) {
    console.log(code)

    return code.replace(/11/g, "-").replace(/10/g, ".").replace(/0+/g, "");
}

function decodeToChar(morse) {
    return MORSE_TABLE[morse] ? MORSE_TABLE[morse] : " ";
}

module.exports = {
    decode
}