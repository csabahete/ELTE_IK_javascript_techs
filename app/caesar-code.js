'use strict';
class CaesarCode {
    constructor() { };

    getOffsetByString(key) {
        CaesarCode.checkKey(key);
        let offset = 0;
        let tryCycle = 0;
        while (0 === offset) {
            offset = tryCycle++;
            offset += CaesarCode.getCharCodeSum(key) % 26;
        }
        return offset;
    }

    encode(str, offset) {
        while (offset < 0)
            offset += 26;
        let output = '';
        for (let i = 0; i < str.length; ++i) {
            let c = str.charAt(i);
            if (c.match(/[a-z]/i)) {
                let code = str.charCodeAt(i);
                if ((code >= 65) && (code <= 90))
                    c = String.fromCharCode(((code - 65 + offset) % 26) + 65);
                else if ((code >= 97) && (code <= 122))
                    c = String.fromCharCode(((code - 97 + offset) % 26) + 97);
            }
            output += c;
        }
        return output;
    }

    decode(str, offset) {
        while (offset < 0)
            offset += 26;
        let output = '';
        for (let i = 0; i < str.length; ++i) {
            let c = str.charAt(i);
            if (c.match(/[a-z]/i)) {
                let code = str.charCodeAt(i);
                if ((code >= 65) && (code <= 90))
                    c = String.fromCharCode((code - 65 - offset + 26) % 26 + 65);
                else if ((code >= 97) && (code <= 122))
                    c = String.fromCharCode((code - 97 - offset + 26) % 26 + 97);
            }
            output += c;
        }
        return output;
    }

    static checkKey(key) {
        if (typeof key !== 'string') {
            throw Error('Wrong key type error');
        }
    }

    static getCharCodeSum(key) {
        let sum = 0;
        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }
        return sum;
    }
};

module.exports = CaesarCode;