/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable("processors", (table) => {
      table.increments("processor_id").primary(); // Sets processor_id as the primary key
      table.string("name");
      table.string("description");
      table.string("image_url");
      table.float("processing_rate")
      table.timestamps(true, true); // Adds created_at and updated_at columns
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function (knex) {
    return knex.schema.dropTable("processors");
  };