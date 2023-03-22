"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keypressDelay = exports.isCadence = exports.getProximateChar = exports.getRandomChar = void 0;
const constants_1 = require("../constants");
const characters_1 = require("./characters");
const utils_1 = require("./utils");
/**
 * Selects a random alphanumeric character based on the source character type.
 *
 * @param {string} char
 * @return {string}
 */
const getRandomChar = (char) => {
    const { alpha, numeric } = characters_1.charTypes;
    return alpha.includes(char)
        ? alpha[(0, utils_1.rand)({ min: 0, max: alpha.length })]
        : numeric[(0, utils_1.rand)({ min: 0, max: numeric.length })];
};
exports.getRandomChar = getRandomChar;
/**
 * Selects a random character proximate to the source character.
 *
 * @param {string} char
 * @return {string | undefined}
 */
const getProximateChar = (char) => {
    if ((0, characters_1.isAlpha)(char) || (0, characters_1.isNumeric)(char)) {
        const chars = constants_1.PROXIMATE_CHARS[char.toUpperCase()];
        if (chars === null || chars === void 0 ? void 0 : chars.length) {
            return chars[(0, utils_1.rand)({ min: 0, max: chars.length })];
        }
    }
    return undefined;
};
exports.getProximateChar = getProximateChar;
/**
 * Determines if a character in a sequence falls on a defined natural typing cadence.
 *
 * @param {number} position
 * @return {boolean}
 */
const isCadence = (position) => {
    const cadences = [6, 10];
    for (const cadence of cadences) {
        if (position % cadence === 0) {
            return true;
        }
    }
    return false;
};
exports.isCadence = isCadence;
const keypressDelay = () => {
    return { delay: (0, utils_1.rand)({ min: constants_1.KEY_PRESS_MIN_DELAY, max: constants_1.KEY_PRESS_MAX_DELAY }) };
};
exports.keypressDelay = keypressDelay;
//# sourceMappingURL=input.js.map