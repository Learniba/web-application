"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNunjucks = void 0;
const path_1 = require("path");
const pg_generator_1 = require("pg-generator");
const nunjucks_1 = __importDefault(require("nunjucks"));
const customFilters = __importStar(require("./custom-filters"));
/**
 * This function is not related to `pg-generator`. It creates `nunjucks` template engine environment
 * for the given generator and adds filters provided by `pg-generator`.
 * `pg-generator` is template agnostic, you can use any template engine.
 *
 * @param generatorPath is the path of the generator.
 *
 * @see https://mozilla.github.io/nunjucks
 */
function getNunjucks(generatorPath) {
    // Create `nunjucks` environment.
    const environment = new nunjucks_1.default.Environment(
    // Add given sub-generator path and shared "partials" path to the list of template paths.
    new nunjucks_1.default.FileSystemLoader([path_1.join(generatorPath, "templates"), path_1.join(__dirname, "../partials")]), { autoescape: false });
    // Add pg-generator built-in filters and custom filters to nunjucks.
    // Filters are not nunjucks specific, many template engines have a similar mechanism.
    const filters = { ...pg_generator_1.filterFunctions, ...customFilters };
    Object.entries(filters).forEach(([name, filter]) => environment.addFilter(name, filter));
    return environment;
}
exports.getNunjucks = getNunjucks;
//# sourceMappingURL=get-nunjucks.js.map