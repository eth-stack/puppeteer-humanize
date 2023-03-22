"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectCharType = exports.charTypeTests = exports.isUpperCase = exports.isLowerCase = exports.isNumeric = exports.isAlpha = exports.isTermination = exports.isPunctuation = exports.isWhitespace = exports.charTypes = void 0;
const tslib_1 = require("tslib");
const CHARS = tslib_1.__importStar(require("../constants/characters"));
const REGEX = tslib_1.__importStar(require("../constants/regex"));
/**
 * Lookup object of character types as arrays.
 * @type {Record<CharacterType, string[]>}
 */
exports.charTypes = {
    alpha: CHARS.ALPHA_CHARS,
    numeric: CHARS.NUMERIC_CHARS,
    whitespace: CHARS.WHITESPACE_CHARS,
    punctuation: CHARS.PUNCTUATION_CHARS,
    termination: CHARS.TERMINATION_CHARS
};
/**
 * Determines if a specified character is whitespace.
 *
 * @param {string} input
 * @return {boolean}
 */
const isWhitespace = (input) => !!input.match(REGEX.WHITESPACE_REGEX);
exports.isWhitespace = isWhitespace;
/**
 * Determines if a specified character is punctuation.
 *
 * @param {string} input
 * @return {boolean}
 */
const isPunctuation = (input) => !!input.match(REGEX.PUNCTUATION_REGEX);
exports.isPunctuation = isPunctuation;
/**
 * Determines if a specified character is a termination character.
 *
 * @param {string} input
 * @return {boolean}
 */
const isTermination = (input) => !!input.match(REGEX.TERMINATION_REGEX);
exports.isTermination = isTermination;
/**
 * Determines if a specified character is an alphabet character.
 * Tests for both uppercase and lowercase.
 *
 * @param {string} input
 * @return {boolean}
 */
const isAlpha = (input) => !!input.match(REGEX.ALPHA_REGEX);
exports.isAlpha = isAlpha;
/**
 * Determines if a specified character is numeric.
 *
 * @param {string} input
 * @return {boolean}
 */
const isNumeric = (input) => !!input.match(REGEX.NUMERIC_REGEX);
exports.isNumeric = isNumeric;
/**
 * Determines if a specified character is lower case.
 *
 * @param {string} input
 * @return {boolean}
 */
const isLowerCase = (input) => (0, exports.isAlpha)(input) &&
    input.toLowerCase() === input &&
    input.toUpperCase() !== input;
exports.isLowerCase = isLowerCase;
/**
 * Determines if a specified character is upper case.
 *
 * @param {string} input
 * @return {boolean}
 */
const isUpperCase = (input) => (0, exports.isAlpha)(input) &&
    input.toUpperCase() === input &&
    input.toLowerCase() !== input;
exports.isUpperCase = isUpperCase;
/**
 * Provides a typed map of each character type test function.
 *
 * @type {Map<string, (input: string) => boolean>}
 */
exports.charTypeTests = new Map([
    ["punctuation", exports.isPunctuation],
    ["termination", exports.isTermination],
    ["whitespace", exports.isWhitespace],
    ["alpha", exports.isAlpha],
    ["numeric", exports.isNumeric]
]);
/**
 * Detects a character type of a provided character.
 *
 * @param {string} char
 * @return {CharacterType | undefined}
 */
const detectCharType = (char) => {
    for (const [charType, test] of exports.charTypeTests.entries()) {
        if (test(char)) {
            return charType;
        }
    }
    return undefined;
};
exports.detectCharType = detectCharType;
//# sourceMappingURL=characters.js.map