"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = void 0;
const tslib_1 = require("tslib");
const debug_1 = tslib_1.__importDefault(require("debug"));
/**
 * Provide a namespaced debug instance for package.
 * @type {Debugger}
 */
exports.debug = (0, debug_1.default)("puppeteer-humanize");
//# sourceMappingURL=debug.js.map