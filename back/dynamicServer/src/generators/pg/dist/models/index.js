"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const pg_generator_1 = require("pg-generator");
const get_nunjucks_1 = require("../utils/get-nunjucks");
const context_1 = __importDefault(require("./context"));
const nunjucks = get_nunjucks_1.getNunjucks(__dirname);
/**
 * Example `pg-generator` generator which creates sequelize models.
 */
class Models extends pg_generator_1.PgGenerator {
    /**
     * Returns a context data including sequelize data types
     * and some other examples.
     */
    context() {
        return context_1.default;
    }
    /**
     * Render method which uses a nunjucks template. You can use any template engine.
     * `pg-generator` is template engine agnostic.
     */
    async render(templatePath, context) {
        return nunjucks.render(templatePath, context);
    }
}
exports.default = Models;
//# sourceMappingURL=index.js.map
