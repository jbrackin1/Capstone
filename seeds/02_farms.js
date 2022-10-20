/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('farms').del()
  await knex('farms').insert([
  {
    name: "Joe",
    description: "Lafayette based farmer",
    price_per_lb: 125.50,
    image_url: "www.placeholder.com" //need placeholder 
  },

  ]);
};

