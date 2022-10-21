exports.up = function(knex) {
    return knex.schema.createTable('reviews',(table)=>{
        table.increments('review_id').primary() // sets review id to primary key
        table.text('content')
        table.integer('score')
        table.integer('product_id').unsigned().notNullable; // productID
        table
          .foreign('product_id')
          .references('product_id')
          .inTable('products')
          .onDelete('cascade')
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
  
  exports.down = function(knex) {
    return knex.schema.dropTable('reviews')
  };