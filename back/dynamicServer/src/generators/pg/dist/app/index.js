"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const pg_generator_1 = require("pg-generator");
/**
 * Example `pg-generator` generator which creates uses several sub-generators.
 */
class App extends pg_generator_1.PgGenerator {
    /**
     * Example of executing other sub generators.
     */
    async init() {
        return Promise.all([
            this.composeWith(require.resolve("../md")),
            this.composeWith(require.resolve("../sequelize6")),
            this.composeWith(require.resolve("../report")),
        ]);
    }
}
exports.default = App;
//# sourceMappingURL=index.js.map
