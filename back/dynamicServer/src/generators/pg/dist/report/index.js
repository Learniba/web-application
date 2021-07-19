"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const pg_generator_1 = require("pg-generator");
const get_nunjucks_1 = require("../utils/get-nunjucks");
const nunjucks = get_nunjucks_1.getNunjucks(__dirname);
/**
 * Example `pg-generator` generator which creates sequelize models.
 */
class Report extends pg_generator_1.PgGenerator {
    /**
     * Render method which uses a nunjucks template. You can use any template engine.
     * `pg-generator` is template engine agnostic.
     */
    async render(templatePath, context) {
        return nunjucks.render(templatePath, context);
    }
}
exports.default = Report;
//# sourceMappingURL=index.js.map