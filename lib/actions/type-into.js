"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeInto = void 0;
const tslib_1 = require("tslib");
const schemas_1 = require("../schemas");
const support_1 = require("../support");
const type_mistake_1 = require("./type-mistake");
/**
 * Humanizes text input into a specified element.
 *
 * @param {ElementHandle} element
 * @param {string} text
 * @param {TypeIntoOptions} config
 * @return {Promise<PerformanceTimer>}
 */
const typeInto = (element, text, config = {}) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // Validate config and inject defaults.
    const { delays, mistakes } = schemas_1.TypeIntoSchema.parse(config);
    // Start performance timer for logging.
    const timer = new support_1.Timer().start();
    // Break input string into individual letters.
    const chars = [...text];
    // Click element to allow text input.
    // TODO: Add mouse lib to avoid clicking in the dead center of the element.
    yield element.hover();
    yield (0, support_1.waitForTimeout)({ min: 100, max: 200 });
    yield element.click({ delay: (0, support_1.rand)({ min: 5, max: 15 }) });
    yield (0, support_1.waitForTimeout)({ min: 200, max: 800 });
    // Type each character in sequence.
    let position = 0;
    for (const char of chars) {
        const charType = (0, support_1.detectCharType)(char);
        // Add potential for mistakes while typing.
        if (charType !== "termination") {
            yield (0, type_mistake_1.typeMistake)(element, char, mistakes);
        }
        // Delay slightly before punctuation.
        if (charType === "punctuation") {
            yield (0, support_1.waitForTimeout)({ min: 50, max: 100 });
        }
        // Type the correct character and add post type delay.
        // TODO: Make capital letters use shift key.
        yield element.type(char, (0, support_1.keypressDelay)());
        yield (0, support_1.waitForTimeout)(delays.all);
        // Add longer delay after sentence termination or punctuation.
        if (charType &&
            (charType === "punctuation" || charType === "termination") &&
            Object.keys(delays).includes(charType)) {
            yield (0, support_1.waitForTimeout)(delays[charType]);
        }
        // Vary longer delays on natural typing cadences.
        if ((0, support_1.isCadence)(position) && (0, support_1.chance)(delays.cadence.chance)) {
            yield (0, support_1.waitForTimeout)(delays.cadence);
        }
        // Increment counter for cadence tracking.
        position++;
    }
    // Pause a moment after finishing input.
    yield (0, support_1.waitForTimeout)(delays.complete);
    // Stop and return performance timer.
    timer.stop();
    (0, support_1.debug)(`Typed "${text}" over ${timer.duration()}ms.`);
    return timer;
});
exports.typeInto = typeInto;
//# sourceMappingURL=type-into.js.map