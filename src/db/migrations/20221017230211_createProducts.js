/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products',(table)=>{
        table.increments('product_id').primary() // sets product id as primary key
        table.string('name')
        table.string('description')
        table.float('price')
        table.string("image_url")
        table.integer('farm_id').unsigned().notNullable;
        table
          .foreign('farm_id')
          .references('farm_id')
          .inTable('farms')
          .onDelete('cascade')
        table.integer('processor_id').unsigned().notNullable;
        table
            .foreign('processor_id')
            .references('processor_id')
            .inTable('processors')
            .onDelete('cascade')
        table.timestamps(true,true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
