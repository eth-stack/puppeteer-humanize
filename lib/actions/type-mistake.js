"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeMistake = void 0;
const tslib_1 = require("tslib");
const schemas_1 = require("../schemas");
const support_1 = require("../support");
/**
 * Types and deletes a mistake based on a source character.
 * Locates a proximate character based on physical location on an EN format keyboard.
 *
 * @todo Add support for multilingual keyboard formats and characters.
 * @param {ElementHandle} element
 * @param {string} char
 * @param {TypeMistakeOptions} options
 * @return {Promise<void>}
 */
const typeMistake = (element, char, options = {}) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const opts = schemas_1.TypeMistakeSchema.parse(options);
    const mistakeChar = (0, support_1.getProximateChar)(char);
    if (mistakeChar && (0, support_1.chance)(opts.chance)) {
        yield element.type(mistakeChar, (0, support_1.keypressDelay)());
        yield (0, support_1.waitForTimeout)(opts.delay);
        yield element.press("Backspace", (0, support_1.keypressDelay)());
        yield (0, support_1.waitForTimeout)({
            min: opts.delay.min * 1.5,
            max: opts.delay.max * 2
        });
    }
});
exports.typeMistake = typeMistake;
//# sourceMappingURL=type-mistake.js.map