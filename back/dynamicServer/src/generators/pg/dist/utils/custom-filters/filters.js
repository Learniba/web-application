"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredColumns = void 0;
/**
 * Filters non-serial required columns.
 *
 * @param table is the table to get columns of.
 * @returns non-serial required columns.
 */
function requiredColumns(table) {
    return table.columns.filter((column) => !column.isSerial && column.notNull);
}
exports.requiredColumns = requiredColumns;
//# sourceMappingURL=filters.js.map