"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeTypes = void 0;
exports.sequelizeTypes = {
    array: ".ARRAY",
    bigint: ".BIGINT",
    bigserial: ".BIGINT",
    bit: ".CHAR",
    "bit varying": ".STRING",
    boolean: ".BOOLEAN",
    box: ".STRING",
    bytea: ".BLOB",
    character: ".CHAR",
    "character varying": ".STRING",
    cidr: ".STRING",
    circle: ".STRING",
    citext: ".CITEXT",
    date: ".DATEONLY",
    "double precision": ".FLOAT",
    hstore: ".HSTORE",
    inet: ".STRING",
    integer: ".INTEGER",
    interval: ".STRING",
    json: ".JSON",
    jsonb: ".JSONB",
    line: ".STRING",
    lseg: ".STRING",
    macaddr: ".STRING",
    money: ".DECIMAL",
    numeric: ".DECIMAL",
    path: ".STRING",
    point: ".STRING",
    polygon: ".STRING",
    real: ".REAL",
    smallint: ".INTEGER",
    smallserial: ".INTEGER",
    serial: ".INTEGER",
    text: ".TEXT",
    "time without time zone": ".TIME",
    "time with time zone": ".TIME",
    "timestamp without time zone": ".DATE",
    "timestamp with time zone": ".DATE",
    tsquery: ".STRING",
    tsvector: ".STRING",
    txid_snapshot: ".STRING",
    uuid: ".UUID",
    xml: ".STRING",
    "user-defined": ".STRING",
    int4range: ".RANGE('INTEGER')",
    int8range: ".RANGE('BIGINT')",
    numrange: ".RANGE('DECIMAL')",
    tsrange: ".RANGE('DATENOTZ')",
    tstzrange: ".RANGE('DATE')",
    daterange: ".RANGE('DATEONLY')",
};
//# sourceMappingURL=sequelize-types.js.map