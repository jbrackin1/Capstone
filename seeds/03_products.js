/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      name: "Lyfter",
      description: "A sativa based CBD",
      price: 125.50,
      image_url: "www.placeholder.com" //need placeholder 
    },
  ]);
};
