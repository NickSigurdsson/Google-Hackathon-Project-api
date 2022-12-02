/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("alerts", (table) => {
        table.uuid("id").primary();
        table.string("Name").notNullable();
        table.string("how_often").notNullable();
        table.string("sources").notNullable();
        table.string("language").notNullable();
        table.string("region").notNullable();
        table.string("how_many").notNullable();
        table.string("deliver_to").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("alerts");
};
