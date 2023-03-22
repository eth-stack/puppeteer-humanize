"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chance = exports.waitForTimeout = exports.rand = void 0;
const tslib_1 = require("tslib");
const mersenne_twister_1 = tslib_1.__importDefault(require("mersenne-twister"));
const exceptions_1 = require("./exceptions");
/**
 * Provides a MersenneTwister pseudo-random generator.
 * @type {MersenneTwister}
 */
const generator = new mersenne_twister_1.default();
/**
 * Simple random number generator using a Mersenne Twister.
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const rand = ({ min, max }) => {
    if (min > max) {
        throw new exceptions_1.InvalidRangeError({ min, max });
    }
    return Math.floor(generator.random() * (max - min + 1) + min);
};
exports.rand = rand;
/**
 * Simple random delay function.
 * Uses Puppeteer naming convention for consistency.
 *
 * @param {number} min
 * @param {number} max
 * @return {Promise<void>}
 */
const waitForTimeout = ({ min, max }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, max ? (0, exports.rand)({ min, max }) : min);
    });
});
exports.waitForTimeout = waitForTimeout;
/**
 * Simple dice roll function that accepts a probability threshold.
 *
 * @param {number} probability
 * @return {boolean}
 */
const chance = (probability = 50) => (0, exports.rand)({ min: 0, max: 100 }) < probability;
exports.chance = chance;
//# sourceMappingURL=utils.js.map