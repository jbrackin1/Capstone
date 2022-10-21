/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
      return knex.schema.createTable("farms", (table) => {
      table.increments("farm_id").primary(); // Sets farm_id as the primary key
      table.string("name");
      table.string("description");
      table.string("image_url");
      table.float("price_per_lb");
      table.timestamps(true, true); // Adds created_at and updated_at columns
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('farms')
};
